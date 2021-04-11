/* fichier: deploy.js */
var FtpDeploy = require("ftp-deploy");
var ftpDeploy = new FtpDeploy();

var config = {
  user: "fabrea",
  password: "being9Cheich",
  host: "www3.futaie.org",
  port: 21,
  localRoot: __dirname + "/dossier/local/",
  remoteRoot: "/dossier/distant/",
  include: ["*", "**/*"],
  deleteRemote: false,
  forcePasv: true
};

ftpDeploy
  .deploy(config)
  .then(res => console.log("finished:", res))
  .catch(err => console.log(err));

  /* fichier: deploy.js */
ftpDeploy.on("uploading", function(data) {
    data.totalFilesCount; // total des fichiers à transférer
    data.transferredFileCount; // total des fichier transférés
    data.filename; // fichier en cours de transfert
  });
  ftpDeploy.on("uploaded", function(data) {
    console.log(data); // données identiques à l'événement "uploading"
  });
  ftpDeploy.on("log", function(data) {
    console.log(data); // données identiques à l'événement "uploading"
  });