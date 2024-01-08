FROM node
WORKDIR /docker_service_fronted
COPY . . 
RUN npm install
RUN npm run build
EXPOSE 4200
RUN ["chmod", "+x", "./entrypoint.sh"]
ENTRYPOINT [ "sh", "./entrypoint.sh" ]