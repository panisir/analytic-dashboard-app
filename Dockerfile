# Step 1: Use the official Node.js 14 image as the base image
FROM node:20-alpine

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of your application's code
COPY . .

# Step 6: Expose the port your app runs on
EXPOSE 3000

# Step 7: Define the command to run your app
CMD ["npm", "run", "start" ]