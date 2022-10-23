FROM openjdk:8
EXPOSE 8040
VOLUME /tmp
ADD /target/reclamationservice.jar reclamationservice.jar
ENTRYPOINT ["java", "-jar", "/reclamationservice.jar"]
