# OpenRemote — SSH

![Открыть удаленный SSH](https://raw.githubusercontent.com/edwardchest/open-vs-ssh/master/docs/images/open-remote-ssh.gif)

## Требования к хосту SSH
Вы можете подключиться к работающему SSH-серверу на следующих платформах.

**Поддерживается**:

- x86_64 Debian 8+, Ubuntu 16.04+, CentOS/RHEL 7+ Linux.
- ARMv7l (AArch32) Raspbian Stretch/9+ (32-разрядная версия).
- ARMv8l (AArch64) Ubuntu 18.04+ (64-разрядная версия).
- macOS 10.14+ (Мохаве)
- Windows 10+
- FreeBSD 13 (требуется установка удаленного хоста расширения вручную)
- DragonFlyBSD (требуется ручная установка удаленного хоста расширения)

## Требования

**Активация**

![Установить](https://raw.githubusercontent.com/edwardchest/open-vs-ssh/master/docs/images/install.png)

Включите расширение в вашем `argv.json`


```json
{
     ...
     "enable-proposed-api": [
         ...,
         "edwardchest.open-vs-ssh",
     ]
     ...
}
```
CTRL + SHIFT + P
который вы можете открыть, выполнив команду «Preferences: Configure Runtime Arguments».
Файл находится в `~/.vscode-oss/argv.json`.

**Alpine Linux**

При работе в Alpine Linux необходимы пакеты gcompat, libstdc++ и procps, которые можно установить через
```bash
sudo apk добавить gcompat libstdc++ procps
```

## Файл конфигурации SSH

[OpenSSH](https://www.openssh.com/) поддерживает использование [файла конфигурации](https://linuxize.com/post/using-the-ssh-config-file/) для хранения всех ваших различных SSH. связи. Чтобы использовать файл конфигурации SSH, выполните команду «Remote-SSH: Открыть файл конфигурации SSH...».
