# SWORD HEALTH PROJECT

# RUN TESTS (on first run)

1 - docker-compose up db -d

2 - npm install (at first run)

3 - cd api/ && ENV=local npm test

# DEPLOY TO DOCKER

1 - docker-compose -f docker-compose.build.yml build

2 - docker-compose up -d or docker-compose down
