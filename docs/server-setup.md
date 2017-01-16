---
title: Server Setup
layout: docs
parent: installation-home
permalink: /docs/server-setup
---

# Setting up your web server

The Montana News Archive app is a web application that runs on a local server in your station. You'll need some basic server hardware running on linux or MacOSX. For this demonstration, we're going going to be assuming you've just installed [Fedora 24](https://getfedora.org/en/server/download/) on your server.

*Note: if you're going to set up a static IP for your server, you can set this during the installation process.*

## Our settings

During this demonstration, we're going to be using the following settings. These settings will most likely be different for your own installation, so be sure to swap them out for your own whenever you see them.

* **Server IP:** 192.168.1.54
* **NAS Device IP:** 192.168.1.84
* **Root password:** mtn@d3mo
* **Primary User's Full Name:** Stan Parker
* **Primary User's username:** stanparker
* **Primary User's Password:** st@np@ss

## Connect the Network-attached-storage (NAS) device

run:

```
sudo mount cifs //192.168.1.xx/ArchiveData /var/archives
```

## Install the package

```
dnf mtna
```

## Run the code

## A