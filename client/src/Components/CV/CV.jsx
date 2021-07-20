import React from 'react'
import {
  PlaceTwoTone,
  MailTwoTone,
  PhoneTwoTone,
  CalendarTodayTwoTone,
  DirectionsCarTwoTone,
  LanguageTwoTone,
  GitHub,
  LinkedIn,
} from '@material-ui/icons'
import hadrien from '../../assets/images/hadrien.jpg'

export const CV = () => {
  return (
    <div className='cvContainer'>
      <div className='profil'>
        <div className='profil__img'>
          <img className='profil__img--sized' src={hadrien} alt='portrait' />
        </div>
        <div className='profil__table'>
          <h2 className='profil__table--title'>PROFIL</h2>
          <div className='profil__table--content'>
            <h3 className='profil__table--content-title'>ADRESSE</h3>
            <p>
              <PlaceTwoTone /> 6 rue Ticky Holgado <br />
              31200 TOULOUSE
            </p>
          </div>
          <div className='profil__table--content'>
            <h3 className='profil__table--content-title'>CONTACT</h3>
            <p>
              <a
                className='profil__table--content-link'
                href='mailto:hadrien.samouillan@gmail.com'
              >
                <MailTwoTone />
                &nbsp;hadrien.samouillan@gmail.com
              </a>
            </p>
            <p>
              <a
                className='profil__table--content-link'
                href='https://github.com/DoubleLama'
                target='_blank'
                rel='noreferrer'
              >
                <GitHub /> &nbsp;github.com/DoubleLama
              </a>
            </p>
            <p>
              <a
                className='profil__table--content-link'
                href='https://www.linkedin.com/in/hadrien-samouillan/'
                target='_blank'
                rel='noreferrer'
              >
                <LinkedIn />
                &nbsp;linkedin.com/hadrien-samouillan
              </a>
            </p>
            <p>
              <a
                className='profil__table--content-link'
                href='tel:+33627400108'
              >
                <PhoneTwoTone /> &nbsp;06 27 40 01 08
              </a>
            </p>
          </div>
          <div className='profil__table--content'>
            <h3 className='profil__table--content-title'>DATE DE NAISSANCE</h3>
            <p>
              <CalendarTodayTwoTone /> 10/01/1988
            </p>
          </div>
          <div className='profil__table--content'>
            <h3 className='profil__table--content-title'>PERMIS</h3>
            <p>
              <DirectionsCarTwoTone /> Permis A & B + véhicules
            </p>
          </div>
        </div>
        <div className='abilities__table'>
          <h2 className='abilities__table--title'>COMPÉTENCES</h2>
          <div className='hobbies__table--content'>
            <p>- Autonomie et initiative</p>
            <p>- Curiosité </p>
            <p>- Analyse des besoins (clients/utilisateurs)</p>
            <p>- Capacité d&apos;apprentissage</p>
            <p>- Travail d&apos;équipe</p>
          </div>
        </div>
        <div className='abilities__table'>
          <h2 className='abilities__table--title'>LANGUES</h2>
          <div className='hobbies__table--content'>
            <p>- Français : langue maternelle</p>
            <p>- Anglais : C1</p>
            <p>- Espagnol : C1</p>
          </div>
        </div>
        <div className='abilities__table'>
          <h2 className='abilities__table--title'>STACK TECHNIQUE</h2>
          <div className='hobbies__table--content'>
            <p>
              - Ruby, Ruby on Rails
              <br />- HTML, CSS (Sass)
              <br />- Javascript, React.js (hooks, redux)
              <br />- Git
              <br />- PostgreSQL
            </p>
          </div>
        </div>
        <div className='hobbies__table'>
          <h2 className='hobbies__table--title'>LOISIRS</h2>
          <div className='hobbies__table--content'>
            <h3 className='hobbies__table--content-title'>SPORTS</h3>
            <p>Crossfit, wakeboard, golf, escalade</p>
          </div>
          <div className='hobbies__table--content'>
            <h3 className='hobbies__table--content-title'>MUSIQUE</h3>
            <p>Bassiste dans 2 groupes de musique</p>
          </div>
        </div>
      </div>
      <div className='infos'>
        <div className='infos__header'>
          <h1 className='infos__header--title'>
            <a
              href='https://www.linkedin.com/in/hadrien-samouillan/'
              target='_blank'
              rel='noreferrer'
            >
              Hadrien Samouillan
              <h2 className='infos__header--title-subtitle'>Développeur Web</h2>
            </a>
          </h1>
        </div>
        <div className='infos__description'>
          <p>
            Passionné d&apos;informatique depuis l&apos;adolescence, j&apos;ai
            osé récemment l&apos;expérience de vivre de ma passion. Diplômé de
            la formation « Développeur » chez The Hacking Project depuis plus
            d&apos;un an, je me suis lancé dans la création de sites internet en
            suivant.
          </p>
          <br />
          <p>
            Après quelques expériences d&apos;élaboration de sites, j&apos;ai
            créé une micro-entreprise de conception de sites internet et de
            dépannage informatique il y a quelques mois.
          </p>
          <br />
          <p>
            Je m&apos;épanouis pleinement dans mon travail, j&apos;apprends de
            nouvelles notions chaque jour, j&apos;aime le travail en équipe et
            j&apos;ai besoin de challenges.
          </p>
          <br />
          <p>
            Egalement passionné de sports, de nature et d&apos;écologie, mon
            objectif serait de travailler dans un de ces secteurs
            d&apos;activité.
          </p>
        </div>
        <div className='infos__body'>
          <div className='infos__body--table'>
            <h2 className='infos__body--table-title'>
              EXPÉRIENCES PROFESSIONNELLES
            </h2>
            <div className='table__row'>
              <div className='table__row--date'>
                <p>2021</p>
              </div>
              <div>
                <p className='table__row--job'>
                  Développement de sites internet :
                  <br />
                  <a
                    className='table__row--job-link'
                    href='https://www.atelierjk.fr'
                    target='_blank'
                    data='first'
                    rel='noreferrer'
                  >
                    <LanguageTwoTone />
                    &nbsp;www.atelierjk.fr
                  </a>
                  <p>
                    <span className='textPrimary'>Stack :</span> Rails, React,
                    Redux, GitHub, PostgresSQL, Cloudinary, Figma, Trello
                  </p>
                  <p>
                    <span className='textPrimary'>Développement :</span> seul en
                    freelance
                  </p>
                  <a
                    className='table__row--job-link'
                    href='https://www.cotoune.com'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <LanguageTwoTone />
                    &nbsp;www.cotoune.com
                  </a>
                  <p>
                    <span className='textPrimary'>Stack :</span> Rails, React,
                    Redux, GitHub, PostgresSQL, Cloudinary, Figma, Trello
                  </p>
                  <p>
                    <span className='textPrimary'>Développement :</span> seul en
                    freelance
                  </p>
                  <a
                    className='table__row--job-link'
                    href='https://www.samba-company.com'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <LanguageTwoTone />
                    &nbsp;www.samba-company.com
                  </a>
                  <p>
                    <span className='textPrimary'>Stack :</span> Rails, React,
                    Redux, GitHub, PostgresSQL, Cloudinary
                  </p>
                  <p>
                    <span className='textPrimary'>Développement :</span> seul en
                    freelance
                  </p>
                </p>
                <p className='table__row--job'>
                  Création de Samba-company, micro-entreprise de création de
                  site web et dépannage informatique
                </p>
              </div>
            </div>
            <div className='table__row'>
              <div className='table__row--date'>
                <p>2020</p>
              </div>
              <div>
                <p className='table__row--job'>
                  Développement de sites internet :
                  <br />
                  <a
                    className='table__row--job-link'
                    href='https://www.bodylicious-resa.fr'
                    target='_blank'
                    data='first'
                    rel='noreferrer'
                  >
                    <LanguageTwoTone />
                    &nbsp;www.bodylicious-resa.fr
                  </a>
                  <p>
                    <span className='textPrimary'>Stack :</span> Rails, React,
                    Redux, GitHub, PostgresSQL, Cloudinary
                  </p>
                  <p>
                    <span className='textPrimary'>Développement :</span> seul en
                    freelance
                  </p>
                  <a
                    className='table__row--job-link'
                    href='https://www.frenchcountryhouses.com'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <LanguageTwoTone />
                    &nbsp;www.frenchcountryhouses.com
                  </a>
                  <p>
                    <span className='textPrimary'>Stack :</span> Rails, React,
                    Redux, GitHub, PostgresSQL, AWS
                  </p>
                  <p>
                    <span className='textPrimary'>Développement :</span> en
                    équipe de 2 personnes, méthode AGILE
                  </p>
                </p>
                <p className='table__row--job'>
                  Projets d&apos;étude :
                  <br />
                  <a
                    className='table__row--job-link'
                    href='https://simpleloc.herokuapp.com'
                    target='_blank'
                    data='first'
                    rel='noreferrer'
                  >
                    <LanguageTwoTone />
                    &nbsp;www.simpleloc.com
                  </a>
                  <p>
                    <span className='textPrimary'>Stack :</span> Rails, React,
                    GitLab, PostgresSQL, Cloudinary
                  </p>
                  <p>
                    <span className='textPrimary'>Développement :</span> en
                    équipe de 5 personnes, méthode AGILE
                  </p>
                  <a
                    className='table__row--job-link'
                    href='https://onlybloc.herokuapp.com'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <LanguageTwoTone />
                    &nbsp;www.onlybloc.com
                  </a>
                  <p>
                    <span className='textPrimary'>Stack :</span> Rails, GitHub,
                    PostgresSQL, Trello
                  </p>
                  <p>
                    <span className='textPrimary'>Développement :</span> en
                    équipe de 4 personnes, méthode AGILE
                  </p>
                </p>
              </div>
            </div>
            <div className='table__row'>
              <div className='table__row--date'>
                <p>
                  2013
                  <br />
                  2020
                </p>
              </div>
              <div>
                <p className='table__row--job'>
                  Infirmier (Clinique de Lagardelle, Clinique Occitanie, EHPAD
                  Nîmes...)
                </p>
              </div>
            </div>
          </div>
          <div className='infos__body--table'>
            <h2 className='infos__body--table-title'>FORMATIONS</h2>
            <div className='table__row'>
              <div className='table__row--date'>
                <p>2020</p>
              </div>
              <div>
                <p className='table__row--job'>
                  Formation Développeur (Ruby on Rails, React.js) The Hacking
                  Projet - En ligne
                </p>
              </div>
            </div>
            <div className='table__row'>
              <div className='table__row--date'>
                <p>2013</p>
              </div>
              <div>
                <p className='table__row--job'>
                  Diplôme d&apos;État Infirmier Institut de Formation en Soins
                  Infirmiers - Pamiers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CV
