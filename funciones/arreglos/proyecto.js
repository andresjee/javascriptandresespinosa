from PIL import Image
import matplotlib.pyplot as plt

# Sube las imágenes desde tu computadora
from google.colab import files
uploaded = files.upload()

# Abre tus imágenes (usa los nombres de archivo correctos)
img_sin_division = Image.open("baño sin division.jpg")
img_con_division = Image.open("division de vano en vidrio templado con accesorios en acero corredera.jpg")

# Mostrar las dos imágenes lado a lado
plt.figure(figsize=(12, 6))

plt.subplot(1, 2, 1)
plt.imshow(img_sin_division)
plt.title("Baño sin división")
plt.axis("off")

plt.subplot(1, 2, 2)
plt.imshow(img_con_division)
plt.title("Con división: vidrio templado")
plt.axis("off")

plt.tight_layout()
plt.show()