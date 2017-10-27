#!/bin/sh
cd $(dirname $0)

find ../js/ -name '__list.json' -exec rm -f {} \;

find ../js/ -name '__listDir.json' -exec rm -f {} \;

find ../js/ -name '__listPackage.json' -exec rm -f {} \;
