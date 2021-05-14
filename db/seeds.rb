Website.destroy_all
Creation.destroy_all
Maintenance.destroy_all

Website.create([
                 { name: 'Only Bloc', url: 'http://only-bloc.herokuapp.com/', date: '03/2020',
                   status: 'démonstration' },
                 { name: 'SimpleLoc', url: 'https://simpleloc.herokuapp.com/', date: '06/2020',
                   status: 'démonstration' },
                 { name: 'French Country Houses', url: 'https://www.frenchcountryhouses.com/', date: '10/2020',
                   status: 'terminé' },
                 { name: 'Bodylicious', url: 'https://www.bodylicious-resa.fr/', date: '12/2020', status: 'en cours' },
                 { name: 'Cotoune', url: 'https://www.cotoune.com/', date: '02/2021', status: 'finalisation' },
                 { name: 'Atelier JK', url: 'https://www.atelierjk.fr/', date: '04/2021', status: 'en cours' },
                 { name: 'Samba Company', url: 'https://www.samba-company.fr', date: '05/2021', status: 'terminé' }
               ])

websites = Website.all

websites.each do |website|
  website.image.attach(
    io: File.open("client/src/assets/images/sites/#{website.name}.jpg"),
    filename: 'file.jpg'
  )
end

Maintenance.create([
                     { title: "Réinstallation du système d'exploitation*", description: '', price: '50€' },
                     { title: "Réinitialisation du système d'exploitation*", description: '', price: '50€' },
                     { title: 'Installation et/ou configuraition de logiciel', description: '', price: '25€' },
                     { title: 'Installation et/ou configuraition de périphérique', description: '', price: '25€' },
                     { title: 'Configuration de messagerie', description: '', price: '20€' },
                     { title: 'Modification et/ou mise à jour du matériel informatique', description: '',
                       price: '30€/h' },
                     { title: 'Problème informatique autre', description: 'sur diagnostic gratuit', price: '25€/h' }
                   ])

Creation.create([
                  { title: 'Achat/gestion de nom de domaine', description: 'Obligatoire pour tout site',
                    price: 'à partir de 4€/an' },
                  { title: 'Hébergement du site', description: 'Comprend la maintenance du site à hauteur de 20h/an (cumulable)',
                    price: '200€/an' },
                  { title: 'Création de site vitrine', description: 'Temps de création entre 2 jours et une semaine selon la complexité',
                    price: 'à partir de 500€' },
                  { title: 'Site web plus complexe Ruby on Rails et base de donnée',
                    description: 'Il faut compter au minimum 1 mois (site E-commerce, gestion de rdv, gestion de réservation,...)', price: '300€/j' },
                  { title: 'Site web plus complexe Ruby on Rails, React.js et base de donnée',
                    description: 'Il faut compter au minimum 1 mois (site E-commerce, gestion de rdv, gestion de réservation,...)', price: '375€/j' }
                ])
