# 1. Java image kullan
FROM openjdk:17-jdk-slim

# 2. Jar dosyasını kopyala
COPY target/*.jar app.jar

# 3. Portu tanımla
EXPOSE 1212

# 4. Başlat
ENTRYPOINT ["java", "-jar", "/app.jar"]