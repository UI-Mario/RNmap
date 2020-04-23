import {Alert} from 'react-native';

const baseUrl = 'http://ljzlivio.frpgz1.idcfengye.com/locations';

export function getAllLocationInfo() {
  return fetch(baseUrl, {
    method: 'Get',
  });
}

export function getAudio() {
  return fetch('http://q8xox3se4.bkt.clouddn.com/audio.mp3', {
    method: 'Get',
  });
}
