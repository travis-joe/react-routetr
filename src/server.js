/**
 * Created by Administrator on 2016/8/15.
 */
'use strict';

var express = require('express');

var app = express();

app.use(express.static('public'));

// data borrowed from: https://en.wikipedia.org/wiki/List_of_cat_breeds

const cats = [
    {
        id: 0,
        name:'Bengal cat',
        description: 'The Bengal is a domestic cat breed developed to look like exotic jungle cats such as leopards, ocelots, margays and clouded leopards. Bengal cats were developed by the selective breeding of domestic cats crossed then backcrossed and backcrossed once more with hybrids from the Asian leopard cat (ALC), Prionailurus bengalensis bengalensis, and domestic cat, with the goal of creating a confident, healthy, and friendly cat with a highly contrasted and vividly marked coat.'
    },
    {
        id: 1,
        name: 'British Shorthair',
        description: 'The British Shorthair is the pedigreed version of the traditional British domestic cat, with a distinctively chunky body, dense coat and broad face. The most familiar colour variant is the "British Blue", a solid blue-gray with copper eyes, but the breed has also been developed in a wide range of other colours and patterns, including tabby and colorpoint.'
    },
    {
        id: 2,
        name: 'Persian',
        description: 'The Persian cat is a long-haired breed of cat characterized by its round face and short muzzle. In Britain, it is sometimes called the Longhair or Persian Longhair. It is also known as the Shiraz or Shirazi, particularly in the Middle East. The first documented ancestors of the Persian were imported into Europe from Persia around 1620.[1] Recognized by the cat fancy since the late 19th century, it was developed first by the English, and then mainly by American breeders after the Second World War. Some cat fancier organizations\' breed standards subsume the Himalayan and Exotic Shorthair as variants of this breed, while others treat them as separate breeds.'},
    {
        id: 3,
        name: 'Siamese cat',
        description: 'The Siamese cat is one of the first distinctly recognized breeds of Asian cat. Derived from the rtgs: wichianmat landrace, one of several varieties of cat native to Thailand (formerly known as Siam), the Siamese became one of the most popular breeds in Europe and North America in the 20th century. The carefully refined modern Siamese is characterized by blue almond-shaped eyes, a triangular head shape, large ears, an elongated, slender, and muscular body, and point colouration. (Aside from the colouration, it bears little resemblance to the original stock, and the more moderate, traditional or "old-style" Siamese, with a much rounder head and body, has been re-established by multiple registries as the Thai cat.) The International Cat Association describes the modern Siamese as social, intelligent, and playful into adulthood, often enjoying a game of fetch. Siamese tend to seek human interaction and also like companionship from other cats.'
    },
    {
        id: 4,
        name: 'Ragdoll',
        description: 'The Ragdoll is a cat breed with blue eyes and a distinct colorpoint coat. It is a large and muscular semi-longhair cat with a soft and silky coat. Developed by American breeder Ann Baker, it is best known for its docile and placid temperament and affectionate nature. The name "Ragdoll" is derived from the tendency of individuals from the original breeding stock to go limp and relaxed when picked up. Particularly popular in both the United Kingdom and the breed\'s native United States, ragdoll cats often are known as "dog-like cats" or "puppy-like cats" due to behaviors such as their tendency to follow people around, their ease at being physically handled, and their relative lack of aggression toward other pets.'
    }
];

app.get('/cats', function (req, res) {
    setTimeout(function () {
        res.status(200).send(cats);
    }, 1000);
});

app.get('/cats/:id', function (req, res) {
    const index = parseInt(req.params.id);
    setTimeout(function () {
        if (cats[index]) {
            res.status(200).send(cats[index]);
        } else {
            res.status(404).send('not_found');
        }
    }, 1000);
})

app.listen(3000);