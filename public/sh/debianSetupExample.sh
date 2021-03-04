####################################CONFIG ZONE ########################################

devieID=""
deviceAccountPass=""
rootPass=""





######################################################################

sudo apt update
sudo apt upgrade
sudo systemctl reboot
sudo apt upgrade
adduser agroedge  #password AgroAdmin321
sudo usermod -aG sudo agroedge
su agroedge
sudo apt install openvpn easy-rsa
wget https:/192.168.200.2/ovpn/defaultHost.ovpn
sudo cp /home/vpn.ovpn /etc/openvpn/config.conf
sudo systemctl status openvpn@config
sudo systemctl enable openvpn@config
sudo systemctl start openvpn@config
############################################
#firewall setup
#
sudo apt install ufw
update-alternatives --set iptables /usr/sbin/iptables-legacy
update-alternatives --set ip6tables /usr/sbin/ip6tables-legacy
ufw default deny incoming
ufw default allow outgoing
ufw allow in on tun0 to any port 22
ufw allow in on eth0 to any port 22
ufw deny in on eth1 to any port 22
ufw allow openvpn
ufw allow in on tun0 to any port 1880
ufw allow in on tun0 to any port 1883
ufw enable
https://sourceforge.net/projects/respin/files/latest/download

