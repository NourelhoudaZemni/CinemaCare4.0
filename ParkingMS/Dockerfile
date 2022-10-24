FROM openjdk:8
EXPOSE 8040
VOLUME /tmp
ADD /target/parkingservice.jar parkingservice.jar
ENTRYPOINT ["java", "-jar", "/parkingservice.jar"]
