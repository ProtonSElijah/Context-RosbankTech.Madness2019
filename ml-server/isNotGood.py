from keras.models import load_model
from keras.preprocessing.text import Tokenizer
import pickle

# loading model
model = load_model('toxic_model80-20.h5')
# loading tokenizer for model
with open('tokenizer80-20.pickle', 'rb') as handle:
    tokenizer = pickle.load(handle)

def isNotGood(s: str):
    v = model.predict(tokenizer.texts_to_matrix([s]))
    return v[0][0]
