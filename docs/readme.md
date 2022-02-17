---
home: true
title: Home
heroImage: /images/logo.png
heroAlt: Hestia Control Panel Logo
heroText: Hestia Control Panel
actions:
  - text: Get Started
    link: /guide/getting-started.html
    type: primary
  - text: Main Features
    link: /guide/features.html
    type: secondary
  - text: Customize Hestia
    link: /guide/customize.html
    type: secondary
features:
  - title: Want to get started today?
    details: Installation is easy. Just follow a few simple steps
  - title: Want to get started today?
    details: Installation is easy. Just follow a few simple steps
  - title: Want to get started today?
    details: Installation is easy. Just follow a few simple steps
footer: MIT Licensed | Copyright © 2021-present HestiaCP
---

### Step 1: Make sure that your server is running a supported operating system (amd64 or arm64):

- Debian 9
- Debian 10
- Debian 11
- Ubuntu 18.04 LTS
- Ubuntu 20.04 LTS

### Step 2: Log in as the system user (root):

You'll need to connect to your server as root, either directly from the console or remotely using SSH.

### Step 3: Download the installer:

```bash
wget https://raw.githubusercontent.com/hestiacp/hestiacp/release/install/hst-install.sh
```

### Step 4: Run the installer and follow the prompts:

```bash
bash hst-install.sh
```

### To perform an unattended installation (with defaults):

```bash
bash hst-install.sh --interactive no --email email@domain.tld --password p4ssw0rd --hostname hostname.domain.tld -f
```

### Or modify your installation with for exmaple:

```bash
bash hst-install.sh --apache no --postgresql yes --clamav no --spamassassin no
```

Will install Hestia without Apache2, ClamAV and Spamassassin How ever it will install Postgresql as additional feature.

More options or examples can be found in the [Documentation](https://docs.hestiacp.com/guide/getting_started.html#all-available-options-of-install-script) or use the [Install string generator](https://gabizz.github.io/hestiacp-scriptline-generator/).

## Reporting bugs and issues:

If something isn't working as expected, please report the issue to our development team on [GitHub](https://github.com/hestiacp/hestiacp/issues).

Please include:

- Hestia Control Panel version/release
- Operating system distribution and release/version
- Options specified during installation (if applicable)
- A detailed description of the issue, with any relevant logs or files as well.

## License

Hestia Control Panel is open-source and licensed under GPLv3.

Made with love & pride by the open-source community from around the world
