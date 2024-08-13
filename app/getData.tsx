interface catPhotos {[key:string]:{
  "pictureUrl": string,
  "alt": string,
  "title": string,
  "description": string}
};

let photoData: catPhotos = {
  "August 13, 2024": {
    "pictureUrl": "/pictures/13august2024.jpg",
    "alt": "photo of a cat inside toilet bowl",
    "title": "Uncertainty",
    "description": "His face was troubled. The situation is uncommon. Yet is this cat there willingly, or against his will? This one poses a lot of questions, yet not a lot of answers. Obviously someone could have put this cat into the toilet bowl to snap a picture, but the cat on closer inspection looks quite content with his dire fate. Stuck within 4 ceramic walls, maybe he finds solice in this lonesome place. I hope we, too, as him, can find peace in our situation even if the circumstances are not optimal for such a feeling."
  }
}

export default function GetData(date: string){
  if(photoData.hasOwnProperty(date)){
    return photoData[date];
  } else {
    return {"pictureUrl": "miazaki.jpg", "alt": "Photo of a defeated man.", "title": "Lack of image", "description": "Oops, looks like you ventured too far in the time machine or simply I forgot to upload a cat picture for this day. Sorry!"}
  }
}