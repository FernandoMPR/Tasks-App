FROM alpine:3.18

RUN apk add --no-cache --update python3 \
    && pip3 install --upgrade pip

