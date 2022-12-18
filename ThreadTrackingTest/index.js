/*import { Client } from "@notionhq/client"

const notion = new Client({ auth: 'secret_6J6yz4o7YCfYd3fW28weFFiqWNDgW9HMK31y2kOiUGH' })

const totlDB = '51bc5933c1254eb68c4af9418d798247';
const legendsDB = '91f92e53cc8f4cba99d26b3f1a1c6b84';
const kyhDB = 'e0e73b3475e7491780d6df281358cd8b';

async function addItem(text) {
  try {
    const response = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        title: { 
          title:[
            {
              "text": {
                "content": text
              }
            }
          ]
        }
      },
    })
    console.log(response)
    console.log("Success! Entry added.")
  } catch (error) {
    console.error(error.body)
  }
}

const getDatabase = async (databaseId) => {
  const response = await notion.databases.query({ database_id: databaseId });
  response.results.forEach(result => {
    let partners = result.properties.Partner.multi_select.map(partner => partner.name);
    let ftCharacters = result.properties.Featuring.multi_select.map(character => {
      return {'name': character.name.split('#')[0], 'id': character.name.split('#')[1]};
    });
    let thread = {
      'title': result.properties['Thread Title'].title['0'].plain_text,
      'status': result.properties.Turn.status.name,
      'id': result.properties.Link.url.split('=')[1],
      'partner': partners,
      'type': result.properties.Type.select.name,
      'featuring': ftCharacters,
      'character': result.properties.Character.select.name,
      'icdate': new Date(result.properties['IC Date'].date.start),
    }
    console.log(thread);
  });
};

getDatabase(kyhDB);*/
//addItem("Test1, Test2");

fetch('https://storm-factory-794.notion.site/51bc5933c1254eb68c4af9418d798247')
.then((response) => response.json())
.then(data => console.log(data));