export class GetUrl {
  constructor(){
		this.url = "http://www.dnd5eapi.co";
		this.resources = {
			"ability-scores": "/api/ability-scores",
			"classes": "/api/classes",
			"conditions": "/api/conditions",
			"damage-types": "/api/damage-types",
			"equipment-categories": "/api/equipment-categories",
			"equipment": "/api/equipment",
			"features": "/api/features",
			"languages": "/api/languages",
			"magic-schools": "/api/magic-schools",
			"monsters": "/api/monsters",
			"proficiencies": "/api/proficiencies",
			"races": "/api/races",
			"skills": "/api/skills",
			"spellcasting": "/api/spellcasting",
			"spells": "/api/spells",
			"startingequipment": "/api/startingequipment",
			"subclasses": "/api/subclasses",
			"subraces": "/api/subraces",
			"traits": "/api/traits",
			"weapon-properties": "/api/weapon-properties"
		}
	}
	
	newUrl(userInput) {
		console.log(this.url + this.resources[userInput])
		return this.url + this.resources[userInput];
	}

}

export async function fetchURL(url) {
  console.log("before", url)
  const theResults = await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log('returned fetch', data);
      console.log('returned fetch.results', data.results);
      return data.results
      // .forEach(classs => $("#data-div").append(`${classs.name} <br>`));
    });

  return theResults;
}
