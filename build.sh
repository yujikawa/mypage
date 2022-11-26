#!/bin/bash

if [ $# -eq 1 ]; then
    echo "Run clean "
    jupyter book clean .
fi
jupyter book build .
