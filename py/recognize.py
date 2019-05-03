# -*- coding: utf-8 -*-

import speech_recognition as sr
from os import path
import sys

try:
    FILE = sys.argv[2]
    AUDIO_FILE = sys.argv[1]
except IndexError: 
	exit(1)


r = sr.Recognizer() 
with sr.AudioFile(AUDIO_FILE) as source:
	audio = r.record(source)
try:
    text = r.recognize_google(audio, language='pt-BR')
    

    arq = open("C:\\Users\\rafae\\OneDrive\\Documentos\\GitHub\\escucha.backend\\tmp\\log\\"+FILE+".txt" ,"w")

    arq.write(text.encode("utf-8"))
    arq.close()

    print("Ok")

except sr.UnknownValueError:
    exit(1)
except sr.RequestError as e:
    exit(1)

