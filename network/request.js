import {Alert} from 'react-native';

const baseUrl =
  'http://rap2.taobao.org:38080/app/mock/246371/example/1583420999935';

export function getAllLocationInfo() {
  return fetch(baseUrl, {
    method: 'Get',
  });
}

export function test() {
  Alert.alert('2222');
  console.log('11111');
}
