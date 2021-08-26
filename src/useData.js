
const useData = () => {
        const cities = ["Ottawa", "Gatineau","Toronto"];
        
        const fields = [
            { name: 'La rochelle', city: 'Gatineau', type: 'outdoor', descriptionFR: "La rochelle est un stade d'extérieur idéal pour les grands matchs de 11 contre 11.",descriptionENG:"La rochelle is an outdoor stadium ideal for 11 vs 11 matches",adresse:"123 rue Marron, Gatineau",prix:" 120$/h", img:"fields/field1.jpg" , id: 1 },
            { name: 'La salle Trux', city: 'Gatineau', type: 'indoor', descriptionFR: "La salle trux est une salle d'interieur avec un parquet permettant de jouer des matchs de 8 contre 8 au maximum",descriptionENG:"La salle Trux is an indoor soccer field with wooden floor for 8 vs 8 matches",adresse:"123 rue Rouge, Gatineau",prix:" 80$/h", img: "fields/field2.jpg"  ,id: 2 },
            { name: 'La chaudière', city: 'Gatineau', type: 'indoor', descriptionFR: "La chaudière est une grande salle d'intérieur avec un terrain synthétique permettant des matchs a au plus 22 joueurs ",descriptionENG:"La chaudiere is an indoor soccer synthetic soccerfield enabling at most 22 players on the field",adresse:"123 rue Orange, Gatineau",prix:" 100$/h", img:" fields/field3.jpg"  ,id: 3},
            { name: 'The Temple', city: 'Ottawa', type: 'outdoor', descriptionFR: "The temple est un stade d'extérieur idéal pour les grands matchs de 11 contre 11.",descriptionENG:"The temple is an outdoor stadium ideal for 11 vs 11 matches",adresse:"uOttawa Minto Complex, Ottawa",prix:" 120$/h", img: "fields/field4.jpg" ,id: 4 },
            { name: 'Urban Foot', city: 'Ottawa', type: 'outdoor', descriptionFR: "Urban foot est un stade d'extérieur permettant des matchs à 10 contre 10 ",descriptionENG:"Urban Foot is an outdoor soccer field enabling 10 vs 10 matches",adresse:"Downtown Orleans, Ottawa",prix:" 105$/h", img: "fields/field5.jpg"  ,id: 5 },
            { name: 'The Original Futsal', city: 'Ottawa', type: 'indoor',descriptionFR: "Il s'agit de la salle de futsal la plus connue d'Ottawa elle est idéale pour les compétitions et les matchs à 11 contre 11 sur un parquet adhérent.",descriptionENG:"This soccer field is the most famous indoor stadium of Ottawa, ideal for indoor matches and competitions of 11 vs 11 on a hardwood floor",adresse:"123 Extern Lees, Ottawa",prix:" 150$", img:"fields/field6.jpg",id: 6},
            { name: 'The Fade', city: 'Toronto', type: 'outdoor', descriptionFR: "Un stade d'extérieur idéal pour les matchs de 11 contre 11 ",descriptionENG:"An outdoor stadium ideal for 11 vs 11 matches",adresse:"123 Football Square, Toronto",prix:" 110$/h", img: "fields/field7.jpg" ,id: 7 },
            { name: 'Jason stadium', city: 'Toronto', type: 'outdoor', descriptionFR: "Un stade d'extérieur idéal pour les matchs de 10 contre 10",descriptionENG:"An outdoor stadium ideal for 10 vs 10 matches",adresse:"123 Imagine Square, Toronto",prix:" 100$/h", img: "fields/field8.jpg" ,id: 8 },
            { name: 'Ottawa Futsal', city: 'Toronto', type: 'indoor', descriptionFR: "Un stade d'intérieur idéal pour les petits matchs de 5 contre 5",descriptionENG:"Am indoor stadium for 5 vs 5 matches",adresse:"123 Drake Square, Toronto",prix:" 80$/h", img: "fields/field9.jpg" ,id: 9 }
        ]; 
    
        const creneaux = ["8h-10h","10h-12h","13h-14h","15h-17h","18h-20h","21h-23h"];
        const videos = [
            {title:"Cavs vs AllStarts",              field:"La rochelle",         date:new Date(2021,6,14),creneau:"15h-17h" , url:"https://www.youtube.com/embed/Z6a4tXiSp-A"},
            {title:"Barcelone Jr vs RealFan",        field:"La rochelle",         date:new Date(2021,6,13),creneau:"15h-17h" , url:"https://www.youtube.com/embed/N9ZewNbsnEI"},
            {title:"Asteroids vs Interstellar",      field:"La salle Trux",       date:new Date(2021,6,12),creneau:"21h-23h" , url:"https://www.youtube.com/embed/N0xpzYHWCP8"},
            {title:"Cambermen vs AmuseYou",          field:"La salle Trux",       date:new Date(2021,6,12),creneau:"18h-20h", url:"https://www.youtube.com/embed/VIXZgP0aJi0"},
            {title:"FC History vs FC Science",       field:"La chaudière",        date:new Date(2021,6,14),creneau:"15h-17h" , url:"https://www.youtube.com/embed/gQCexf1-Qy8"},
            {title:"FC Engineering vs FC Medicine",  field:"La chaudière",        date:new Date(2021,6,10),creneau:"8h-10h" , url:"https://www.youtube.com/embed/wBprhPvKhBo"},
            {title:"FC Team A vs FC Team B",         field:"The Temple",          date:new Date(2021,6,10),creneau:"10h-12h" , url:"https://www.youtube.com/embed/6CU6Yfj3Mms"},
            {title:"FC Avengers vs FC Thanos",       field:"The Temple",          date:new Date(2021,6,9),creneau:"21h-23h" , url:"https://www.youtube.com/embed/ByjFA0jtv40"},
            {title:"FC Ema vs FC NRJ",               field:"Urban Foot",          date:new Date(2021,6,8),creneau:"8h-10h" , url:"https://www.youtube.com/embed/CoCOxerH4QQ"},
            {title:"Team 4zr vs Team EMMIR ",        field:"Urban Foot",          date:new Date(2021,6,7),creneau:"10h-12h" , url:"https://www.youtube.com/embed/I5MNFz96Ie4"},
            {title:"The Batmen vs The Jokers",       field:"The Original Futsal", date:new Date(2021,6,6),creneau:"18h-20" , url:"https://www.youtube.com/embed/xc28n14-LJs"},
            {title:"The Winners vs Awesome",         field:"The Original Futsal", date:new Date(2021,6,5),creneau:"10h-12h" , url:"https://www.youtube.com/embed/CoCOxerH4QQ"},
            {title:"The Associate vs KFY",           field:"The Fade",           date:new Date(2021,6,15),creneau:"8h-10h",   url:"https://www.youtube.com/embed/YeF0Za00QTo" },
            {title:"Team Ross vs Team Rachel",       field:"The Fade",           date:new Date(2021,6,14),creneau:"21h-23h" , url:"https://www.youtube.com/embed/Kj4x1vAtc14"},
            {title:"Team Francisco vs Team Melania",  field:"Jason stadium",     date:new Date(2021,6,15),creneau:"13h-14h" , url:"https://www.youtube.com/embed/ktetnQ5vbGU"},
            {title:"The Best vs The Incredible",      field:"Jason stadium",     date:new Date(2021,6,12),creneau:"18h-20" , url:"https://www.youtube.com/embed/5gPSIIeipCA"},
            {title:"Les Rois vs les Gaulois",         field:"Ottawa Futsal",     date:new Date(2021,6,13),creneau:"8h-10h" , url:"https://www.youtube.com/embed/5Zb3vAUd1GM"},
            {title:"Les Québécois vs Les Ontariens",  field:"Ottawa Futsal",     date:new Date(2021,6,1),creneau:"15h-17h" , url:"https://www.youtube.com/embed/Ot7H0MunWlc"},
            {title:"Les Québécois vs Les Américains", field:"Ottawa Futsal",     date:new Date(2021,6,6),creneau:"13h-14h" , url:"https://www.youtube.com/embed/e15qxjmKB3M"},
            {title:"Les 6e vs Les 5e",                field:"Jason stadium",     date:new Date(2021,6,2),creneau:"8h-10h" , url:"https://www.youtube.com/embed/JhJ3Cy_2rT4"},
            {title:"Les Lycéens vs les Collégiens",   field:"La rochelle",       date:new Date(2021,6,3),creneau:"13h-14h" , url:"https://www.youtube.com/embed/-l0j0PHsmuY"}
        ]
        
        const availabilities = [
            {field:"La rochelle",         date:new Date(2021,6,20), creneau:"8h-10h" },
            {field:"La rochelle",         date:new Date(2021,6,20), creneau:"10h-12h" },
            {field:"La rochelle",         date:new Date(2021,6,20), creneau:"13h-14h" },
            {field:"La rochelle",         date:new Date(2021,6,20), creneau:"15h-17h" },
            {field:"La rochelle",         date:new Date(2021,6,20), creneau:"18h-20h" },
            {field:"La rochelle",         date:new Date(2021,6,20), creneau:"21h-23h" },

            {field:"La rochelle",         date:new Date(2021,6,21), creneau:"8h-10h" },
            {field:"La rochelle",         date:new Date(2021,6,21), creneau:"10h-12h" },
            {field:"La rochelle",         date:new Date(2021,6,21), creneau:"13h-14h" },

            {field:"La salle Trux",       date:new Date(2021,6,20), creneau:"21h-23h" },
            {field:"La salle Trux",       date:new Date(2021,6,22), creneau:"18h-20h"},
            {field:"La chaudière",        date:new Date(2021,6,23), creneau:"15h-17h" },
            {field:"La chaudière",        date:new Date(2021,6,24), creneau:"8h-10h" },
            {field:"The Temple",          date:new Date(2021,6,25), creneau:"10h-12h" },
            {field:"The Temple",          date:new Date(2021,6,26),  creneau:"21h-23h" },
            {field:"Urban Foot",          date:new Date(2021,6,27),  creneau:"8h-10h" },
            {field:"Urban Foot",          date:new Date(2021,6,25),  creneau:"10h-12h" },
            {field:"The Original Futsal", date:new Date(2021,6,26),  creneau:"18h-20" },
            {field:"The Original Futsal", date:new Date(2021,6,21),  creneau:"10h-12h" },
            {field:"The Fade",           date:new Date(2021,6,23),  creneau:"8h-10h",  },
            {field:"The Fade",           date:new Date(2021,6,29),  creneau:"21h-23h" },
            {field:"Jason stadium",     date:new Date(2021,6,25),   creneau:"13h-14h" },
            {field:"Jason stadium",     date:new Date(2021,6,30),   creneau:"18h-20" },
            {field:"Ottawa Futsal",     date:new Date(2021,6,25),   creneau:"8h-10h" },
            {field:"Ottawa Futsal",     date:new Date(2021,6,24),    creneau:"15h-17h" },
            {field:"Ottawa Futsal",     date:new Date(2021,6,20),    creneau:"13h-14h" },
            {field:"Jason stadium",     date:new Date(2021,6,23),    creneau:"8h-10h" },

        ];

    return ( 
        {cities, fields, creneaux, videos,availabilities}
     );
}
 
export default useData;