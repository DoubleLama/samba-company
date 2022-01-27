Website.destroy_all
Creation.destroy_all
Maintenance.destroy_all

Website.create([
                 { name: 'Samba Company', url: 'https://www.samba-company.fr', date: 'Mai 2021',
                   status: 'Done',
                   statusSlug: 'livré' },
                 { name: 'French Country Houses', url: 'https://www.frenchcountryhouses.com/', date: 'Octobre 2020',
                   status: 'Done',
                   statusSlug: 'livré' },
                 { name: 'Cotoune', url: 'https://www.cotoune.com/', date: 'Février 2021',
                   status: 'Ending',
                   statusSlug: 'fin de développement' },
                 { name: 'Atelier JK', url: 'https://www.atelierjk.fr/', date: 'Avril 2021',
                   status: 'Progress',
                   statusSlug: 'développement' },
                 { name: 'Bodylicious', url: 'https://www.bodylicious-resa.fr/', date: 'Décembre 2020',
                   status: 'Progress',
                   statusSlug: 'développement' },
                 { name: 'Only Bloc', url: 'http://only-bloc.herokuapp.com/', date: 'Mars 2020',
                   status: 'Project',
                   statusSlug: 'projet' },
                 { name: 'SimpleLoc', url: 'https://simpleloc.herokuapp.com/', date: 'Juin 2020',
                   status: 'Project',
                   statusSlug: 'projet' }
               ])

websites = Website.all

websites.each do |website|
  website.image.attach(
    io: File.open("client/src/assets/images/sites/#{website.name}.jpg"),
    filename: 'file.jpg'
  )
end

Maintenance.create([
                     { title: "Réinstallation du système d'exploitation*",
                       description: 'votre ordinateur ne démarre plus', price: '50€' },
                     { title: "Restauration du système d'exploitation*",
                       description: 'votre ordinateur démarre mais est très lent ou présente de lourds disfonctionnements ', price: '50€' },
                     { title: 'Configuration de messagerie', description: '', price: '20€' },
                     { title: 'Installation et/ou configuration de logiciel', description: '', price: '25€' },
                     { title: 'Installation et/ou configuration de périphérique', description: '', price: '25€' },
                     { title: "Nettoyage complet d'un ordinateur infecté par un virus", description: '', price: '40€' },
                     { title: 'Modification et/ou mise à jour du matériel informatique', description: '',
                       price: '30€/h' },
                     { title: 'Problème informatique autre', description: 'sur diagnostic gratuit', price: '25€/h' }
                   ])

Creation.create([
                  { title: 'Achat/gestion de nom de domaine*', description: 'Obligatoire pour tout site',
                    price: 'à partir de 4€/an' },
                  { title: 'Hébergement du site*', description: 'Comprend la maintenance du site à hauteur de 16h/an (cumulable)',
                    price: '300€/an' },
                  { title: 'Création de site vitrine', description: 'Temps de création entre 2 jours et une semaine selon la complexité',
                    price: 'à partir de 600€' },
                  { title: 'Site web plus complexe Ruby on Rails et base de donnée',
                    description: 'Il faut compter au minimum 1 mois (site E-commerce, gestion de rdv, gestion de réservation,...)', price: '350€/j' },
                  { title: 'Site web plus complexe Ruby on Rails, React.js et base de donnée',
                    description: 'Il faut compter au minimum 1 mois (site E-commerce, gestion de rdv, gestion de réservation,...)', price: '380€/j' }
                ])
