# # Use the official Node.js 16 image as the base image
FROM node:18-alpine

# Create and change to the app directory
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install production dependencies
RUN npm install --legacy-peer-deps

# Copy the local code to the container image
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "run", "start"]

# 多阶段构建 （体积反而更大了？？？
# https://medium.com/@itsuki.enjoy/dockerize-a-next-js-app-4b03021e084d
# FROM node:18-alpine as base
# RUN apk add --no-cache g++ make py3-pip libc6-compat
# WORKDIR /app
# COPY package*.json ./
# EXPOSE 3000
# RUN npm install --legacy-peer-deps

# FROM base as builder
# WORKDIR /app
# COPY . .
# RUN npm run build

# FROM base as production
# WORKDIR /app

# RUN npm ci --legacy-peer-deps --only=production

# RUN addgroup -g 1001 -S nodejs
# RUN adduser -S nextjs -u 1001
# USER nextjs


# COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
# COPY --from=builder /app/node_modules ./node_modules
# COPY --from=builder /app/package.json ./package.json
# COPY --from=builder /app/public ./public

# CMD npm start




