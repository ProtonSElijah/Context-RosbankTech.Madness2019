== ML-часть ==
Здесь всё, связанное с ML

=== Установка ===
```
$ pip install --user requirements.txt
```

=== Конфигурация RabbitMQ === 
```
# systemctl start rabbitmq
# rabbitmqctl add_user ml-serv 123
# rabbitmqctl set_user_tags ml-serv administrator
# rabbitmqctl set_permissions -p / ml-serv ".*" ".*" ".*"
echo "[{rabbit, [{loopback_users, []}]}]" >> /etc/rabbitmq/rabbitmq.config
# systemctl restart rabbitmq
```

=== Запуск ML-сервера ===
```
$ python nn-rpc-server.py --rabbit-addr <rabbit address>
```
