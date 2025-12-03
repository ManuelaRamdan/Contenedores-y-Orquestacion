# Imagen base de Node
FROM node:22

# Directorio de trabajo dentro del contenedor
WORKDIR /home/app

# Copiamos solo los package* primero para cachear la instalación de dependencias
COPY package*.json ./

# Instalamos dependencias
RUN npm install

# Ahora copiamos el resto del código
COPY . .

# Exponer el puerto donde escucha la app
EXPOSE 3000

# Comando para iniciar la app
CMD ["npm", "start"]
