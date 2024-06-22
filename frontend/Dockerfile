FROM node:20-alpine


WORKDIR /app

COPY package*.json ./

RUN npm i

# Copy the rest of the source files into the image.
COPY . .

# Expose the port that the application listens on.
EXPOSE 3000

# Run the application.
CMD npm run dev
