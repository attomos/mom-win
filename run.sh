#!/bin/sh

if hash http-server 2>/dev/null; then
    http-server .
else
    python -m SimpleHTTPServer
    echo 'http://0.0.0.0:8000'
fi
