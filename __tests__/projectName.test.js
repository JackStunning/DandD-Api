import { getUrl, GetUrl } from './../src/d&d-db';

describe('getUrl', () => {

  test('Should concat url string and resource string to make one url', () => {
    let newGetUrl = new GetUrl();
    expect(newGetUrl.newUrl()).toEqual("http://www.dnd5eapi.co/api/ability-scores");
  })

})