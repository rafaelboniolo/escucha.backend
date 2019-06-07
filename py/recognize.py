# -*- coding: utf-8 -*-

import speech_recognition as sr
from os import path
import sys


try:
    # FILE = sys.argv[2]
    AUDIO_FILE = sys.argv[1]
except IndexError: 
	print("Invalid Params")
   

r = sr.Recognizer() 
with sr.AudioFile(AUDIO_FILE) as source:
	audio = r.record(source)
try:
    text = r.recognize_google(audio, language='pt-BR')
    print(text.encode("utf-8"))
    exit(0)

except sr.UnknownValueError:
    print("Invalid format")
    exit(1)
except sr.RequestError as e:
    print("Request error")
    exit(1)

