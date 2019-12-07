import pika
import isNotGood
import argparse

argparser = argparse.ArgumentParser(description="ML-part")
argparser.add_argument("--rabbit-addr", default='localhost', help='Адрес RabbitMQ-сервера')
args = argparser.parse_args()

# rabbitmq is used for scaling when multiple NN servers are in use
credentials = pika.PlainCredentials("ml-serv", "123")
connection = pika.BlockingConnection(
    pika.ConnectionParameters(host=args.rabbit_addr, credentials=credentials)
)
print("connected\n")
channel = connection.channel()
channel.queue_declare(queue='user-messages', durable=True)

def on_request(ch: pika.channel.Channel, method, props, body):
    # body is byte array, so we need to decode it
    print(body.decode('utf-8'))
    res = isNotGood.isNotGood(body.decode('utf-8')) 
    # sending the answer back to data-server
    # routing_key and correlation_id are used to trace back
    # only that one consumer, which asked us
    # body is converted here to str because then it conerts 
    # to byte array and should be decoded
    # is's easier to decode string "0.7856" than bytes of float32
    ch.basic_publish(exchange='',
           routing_key=props.reply_to,
           properties=pika.BasicProperties(
               correlation_id=props.correlation_id),
           body=str(res))
    # receive confirmation. If we forget this, this
    # can lead to unlimited memory consumption 
    # by RabbitMQ
    ch.basic_ack(delivery_tag=method.delivery_tag)

# one listener per server
channel.basic_qos(prefetch_count=1)
channel.basic_consume(queue='user-messages', on_message_callback=on_request)

channel.start_consuming()
