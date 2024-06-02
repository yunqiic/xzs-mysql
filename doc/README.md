```shell
cd source/xzs
mvn clean package
cd ../../
cp source/xzs/target/xzs-3.9.0.jar docker1/release 

cd docker1/
sudo docker-compose up -d
sudo docker-compose stop xzs-java
sudo docker-compose start xzs-java
sudo docker-compose down
sudo docker-compose ps
sudo docker-compose logs -f
sudo docker-compose logs -f xzs-java

https://xzs.7otech.com

http://82.157.54.206:8010
http://82.157.54.206:8010/student
student
123456
http://82.157.54.206:8010/admin
admin
123456

https://www.mindskip.net:999/
```