const db = require('sqlite')
const fs = require('fs')

var questions = fs.readFileSync("questions.csv","UTF-8")
var array = questions.split("\n"))
boucle qui rend chaque terme 



// Creation/Gestion du fichier BDD
/*db.open('./bdd.db').then(() => {
    return console.log('base de données ouverte')
}).then(() => {
    return db.run('CREATE TABLE IF NOT EXISTS ask (id, theme, question, reponse, first, second, third, fourth)')
}).catch((err) =>{
    console.log('BDD_ERR_create failed ====>', err)
}).then(() => {
	let id = 1
	let theme = 'manga'
	let question = "Au contact de l'eau froide Ranma (Ranma 1/2) se tranforme en ?"
	let reponse = 'Jeune fille'
	let choix =['Jeune fille','Panda','Vieillard','Loup']
	return db.run('INSERT INTO ask VALUES (?, ?, ?, ?, ?, ?, ?, ?)', id,theme, question, reponse, choix[0], choix[1], choix[2], choix[3])
}).then(() => {
	let id = 2
	let theme = 'manga'
	let question = "C'est l'histoire de 2 jeunes frères partant à la recherche de la pierre philosophale."
	let reponse = 'Fullmetal Alchemist'
	let choix = ['Welcome to the Chemistry Lab','Fullmetal Alchemist','Bakuman','Fairy Tail']
	return db.run('INSERT INTO ask VALUES (?, ?, ?, ?, ?, ?, ?, ?)', id,theme, question, reponse, choix[0], choix[1], choix[2], choix[3])
}).then(() => {
	let id = 3
	let theme = 'manga'
	let question = "Dans lequel de ces mangas le bushido occupe une place centrale ?"
	let reponse = 'Vagabond'
	let choix = ['Vagabond','Bleach','Death Note','Dragon Ball']
	return db.run('INSERT INTO ask VALUES (?, ?, ?, ?, ?, ?, ?, ?)', id,theme, question, reponse, choix[0], choix[1], choix[2], choix[3])
}).then(() => {
	let id = 4
	let theme = 'manga'
	let question = "Comment s'appelle l'arme emblématique de Guts dans le manga Berserk"
	let reponse = 'La Dragonslayer'
	let choix = ['La Masamune','Durandal','La Dragonslayer','Tensa Zangetsu']
	return db.run('INSERT INTO ask VALUES (?, ?, ?, ?, ?, ?, ?, ?)', id,theme, question, reponse, choix[0], choix[1], choix[2], choix[3])
}).then(() => {
	let id = 5
	let theme = 'manga'
	let question = "Dans le manga One Punch Man quel est le nom du heros \"le chauve à la cape\" ?"
	let reponse = 'Saitama'
	let choix = ['Genos','Bang','Saitama','Tatsumaki']
	return db.run('INSERT INTO ask VALUES (?, ?, ?, ?, ?, ?, ?, ?)', id,theme, question, reponse, choix[0], choix[1], choix[2], choix[3])
}).then(() => {
	return db.all("SELECT * FROM ask")
}).then((ask) => {
	return console.log(ask)
}).catch((err) =>{
    console.log('BDD_ERR_insert failed ====>', err)
}).then(() => {
	return console.log('--------------------------------------------------')
}).then(() => {
	var rand = Math.floor(Math.random() * 5) + 0
	return db.all('SELECT * FROM ask WHERE id = (?)', rand)
}).then((ask) => {
	return console.log(ask)
}).catch((err) =>{
    console.log('BDD_ERR_select failed ====>', err)
})*/