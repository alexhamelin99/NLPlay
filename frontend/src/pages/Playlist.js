import React from 'react';
import { NavLink } from 'react-router-dom';
import Player from '../components/dasboard/Player';
import un from '../images/playlist_1.png'
import deux from '../images/playlist_2.png'
import trois from '../images/playlist_3.png'
import quatre from '../images/playlist_4.png'
import cinq from '../images/playlist_5.png'
import six from '../images/playlist_6.png'
import './Playlist.css';
;




function Playlist() {
  return <div className='container'>
    <h1 className='mt-2'>Mes Playlist</h1>
    <div className='row mt-2 justify-content-center'>
        <div class="card playlist col-md-3 m-4 mt-1" style={{paddingRight: 0, paddingLeft: 0, borderRadius: 15}}>
          <a href='https://open.spotify.com/playlist/40xjbm7u6nOuZHpzPvJIv6?si=9469de50480347b7' exact target="_blank">
            <img src={un} class="card-img-top"style={{borderRadius: 15, borderBottomRightRadius: 0, height: 150, borderBottomLeftRadius: 0}}/>
            <div class="card-body">
              <p class="card-text"> <strong>Mots-clés :</strong> bel, beau, chanson, chanter, eau, grand, haut, fleur, bleu, noir, dieu, joli, doux, oiseau, vif </p>
            </div>
          </a>
        </div>
        <div class="card playlist col-md-3 m-4 mt-2" style={{paddingRight: 0, paddingLeft: 0, borderRadius: 15}}>
          <a href='https://open.spotify.com/playlist/2AUCopHoyfS1hdC7xntgO3?si=fcaf87a1f40e4bd0' exact target="_blank">
            <img src={deux} class="card-img-top"style={{borderRadius: 15, borderBottomRightRadius: 0, height: 150, borderBottomLeftRadius: 0}}/>
            <div class="card-body">
              <p class="card-text"><strong>Mots-clés :</strong> nuit,
monde,
homme,
reve,
terre,
oeil,
enfant,
perdre,
soleil,
vent,
ciel,
venir,
fou,
cœur,
peur
 </p>
            </div>
          </a>
        </div>
        <div class="card playlist col-md-3 m-4 mt-2" style={{paddingRight: 0, paddingLeft: 0, borderRadius: 15}}>
          <a href='https://open.spotify.com/playlist/3Ymte7Deb0zbhaT7xFzSWH?si=66a75aa1e9da4ae5' exact target="_blank">
            <img src={trois} class="card-img-top"style={{borderRadius: 15, borderBottomRightRadius: 0, height: 150, borderBottomLeftRadius: 0}}/>
            <div class="card-body">
              <p class="card-text"><strong>Mots-clés :</strong> tout,
plus,
dire,
voir,
bien,
vouloir,
pouvoir,
faire,
savoir,
aller,
autre,
peu,
encore,
falloir,
temps
 </p>
            </div>
          </a>
        </div>
        <div class="card playlist col-md-3 m-4 mt-2" style={{paddingRight: 0, paddingLeft: 0, borderRadius: 15}}>
          <a href='https://open.spotify.com/playlist/6soXn3mdQDek7WVMAzOtR8?si=211f9c4f7d394ed4' exact target="_blank">
            <img src={quatre} class="card-img-top"style={{borderRadius: 15, borderBottomRightRadius: 0, height: 150, borderBottomLeftRadius: 0}}/>
            <div class="card-body">
              <p class="card-text"><strong>Mots-clés :</strong> copain,
gars,
gentil,
ouai,
chanteur,
tite,
volatil,
cul,
mou,
mome,
mec,
putain,
sinon,
pote,
smoking
 </p>
            </div>
          </a>
        </div>
        <div class="card playlist col-md-3 m-4 mt-2" style={{paddingRight: 0, paddingLeft: 0, borderRadius: 15}}>
          <a href='https://open.spotify.com/playlist/4ubP4VaMbmDeDmQtc3b96O?si=ff89aef7f95f4765' exact target="_blank">
            <img src={cinq} class="card-img-top"style={{borderRadius: 15, borderBottomRightRadius: 0, height: 150, borderBottomLeftRadius: 0}}/>
            <div class="card-body">
              <p class="card-text"><strong>Mots-clés :</strong> amour,
jour,
aime,
vie,
aimer,
oublier,
vivre,
tant,
cœur,
toujours,
souvenir,
coeur,
revenir,
bonheur,
joie
 </p>
            </div>
          </a>
        </div>
        <div class="card playlist col-md-3 m-4 mt-2" style={{paddingRight: 0, paddingLeft: 0, borderRadius: 15}}>
          <a href='https://open.spotify.com/playlist/5O5dSjL58Y5J1hh1xTSDiX?si=2684dc9babf84553' exact target="_blank">
            <img src={six} class="card-img-top"style={{borderRadius: 15, borderBottomRightRadius: 0, height: 150, borderBottomLeftRadius: 0}}/>
            <div class="card-body">
              <p class="card-text"><strong>Mots-clés :</strong> petit,
fille,
bon,
femme,
vieux,
coup,
faire,
mettre,
mere,
tit,
pied,
maman,
grand,
garcon,
gros
 </p>
            </div>
          </a>
        </div>
    </div>
  </div>;
}

export default Playlist;
