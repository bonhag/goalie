import cv2
import Image
import numpy

cap = cv2.VideoCapture(0)
ret, img = cap.read()
img = numpy.array(img)
img = Image.fromarray(img)
img.save('output.jpg')
