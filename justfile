#!/usr/bin/env just --justfile

# default recipe to display help information
@default:
  @just --list

# build the module
@build:
  npm run build

# publish the module
@pub:
  npm publish

# see what versions are on npm
@vers:
  npm view . versions