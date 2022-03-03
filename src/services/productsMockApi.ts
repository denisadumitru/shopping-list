import { api } from '@services';

const gjson = [
  {
    name: 'AppleGolden-Delicious',
    imgPath: 'Golden-Delicious_Iconic.jpg',
    description:
      'Golden has a white juicy pulp and a greenish yellow shell. The taste is mellow and sweet, making Golden suitable for desserts.',
    title: 'Apple Golden',
  },
  {
    name: 'AppleGranny-Smith',
    imgPath: 'Granny-Smith_Iconic.jpg',
    description:
      'Granny Smith is a green apple with white, firm pulp and a clear acidity in the flavor.',
    title: 'Apple Granny Smith',
  },
  {
    name: 'ApplePink-Lady',
    imgPath: 'Pink-Lady_Iconic.jpg',
    description:
      'Pink Lady reminds of Royal Gala, though it is an even sweeter and crispier apple.',
    title: 'Apple Pink Lady',
  },
  {
    name: 'AppleRed',
    imgPath: 'Red-Delicious_Iconic.jpg',
    description: 'Red is a dark red apple with relatively soft pulp and sweet taste.',
    title: 'Apple Red',
  },
  {
    name: 'AppleRoyal-Gala',
    imgPath: 'Royal-Gala_Iconic.jpg',
    description:
      'Royal Gala is a crispy and very juicy apple, with yellow-white pulp. The peel is thin with a red yellow speckled color.',
    title: 'Apple Royal Gala',
  },
  {
    name: 'Avocado',
    imgPath: 'Avocado_Iconic.jpg',
    description:
      'Avocado is a fruit with a clear core in the middle. The pulp is light yellow and the peel may vary from light green to dark green, almost black. Avocado fits for starters, salads and as an ingredient in Guacamole.',
    title: 'Avocado',
  },
  {
    name: 'Banana',
    imgPath: 'Banana_Iconic.jpg',
    description:
      'An ecologically grown banana. Bananas are good as snacks. The banana is temperature sensitive, very sensitive to dehydration, ethylene and cold damage. Store in room temperature or cool, never in a refrigerator.',
    title: 'Banana Ecological',
  },
  {
    name: 'Kiwi',
    imgPath: 'Kiwi_Iconic.jpg',
    description:
      'Kiwi, or Chinese currants, as it is also called, has a sweet taste with clear acidity. The fruit is rich in vitamin C.',
    title: 'Kiwi',
  },
  {
    name: 'Lemon',
    imgPath: 'Lemon_Iconic.jpg',
    description: 'Lemon is used as a flavor in food and drinks and has a very tart and sour taste.',
    title: 'Lemon',
  },
  {
    name: 'Lime',
    imgPath: 'Lime_Iconic.jpg',
    description:
      'The lime fruit, like lemon, has sour taste, with the difference that the lime is more juicy and flavorsome than the lemon. It is mainly the juice you use but also the shell can be used.',
    title: 'Lime',
  },
  {
    name: 'Mango',
    imgPath: 'Mango_Iconic.jpg',
    description:
      'Mango has a fresh, powerful and sweet taste, but a special exotic shade. Inside there is a large, oval kernel in which the pulp is grown in. This makes the best way to cut mango is with the shell on. Divide the fruit by cutting along on both sides of the core. Mango can be eaten naturally or in desserts, entrees and main courses.',
    title: 'Mango',
  },
  {
    name: 'MelonCantaloupe',
    imgPath: 'Cantaloupe_Iconic.jpg',
    description:
      'The cantaloupe melon is a rather small and all round sugar melon, with a greenish yellow mesh patterned shell. The pulp is orange colored with juicy and sweet taste.',
    title: 'Melon Cantaloupe',
  },
  {
    name: 'MelonGalia-Melon',
    imgPath: 'Galia-Melon_Iconic.jpg',
    description:
      'Galia melon is a small round sugar melon with a yellowish green, orange, or light brown mesh patterned shell. The pulp is firm and juicy, with a cream white to yellowish green color and a sweet, rich flavor.',
    title: 'Galia melon',
  },
  {
    name: 'MelonHoneydew-Melon',
    imgPath: 'Honeydew-Melon_Iconic.jpg',
    description:
      'Honeydew melon is an oval shaped sugarmelon, with a yellow shell. The pulp is creamy light yellow with juicy, sweet and fresh taste, which is milder than other melons.',
    title: 'Honeydew melon',
  },
  {
    name: 'MelonWatermelon',
    imgPath: 'Watermelon_Iconic.jpg',
    description:
      'Water melon juicier than sugar melons, and has a round peel with light green base color, with long-tied dark green stripes. The pulp is very juicy, mild and sweet, and occurs with and without kernels.',
    title: 'Water melon',
  },
  {
    name: 'Nectarine',
    imgPath: 'Nectarine_Iconic.jpg',
    description:
      'The nectarine is a stone fruit with plain peel and yellow or orange pulp, which is somewhat firmer than the peach. Nectarine is suitable for eating naturally but can also be used for pastry, marmalade and jam.',
    title: 'Nectarine',
  },
  {
    name: 'Orange',
    imgPath: 'Orange_Iconic.jpg',
    description:
      'There are many different types of oranges that ripen and is sold during different parts of the year. The orange is a very important vitamin C source and the vitamins are best kept if the fruit is eaten naturally.',
    title: 'Orange',
  },
  {
    name: 'Papaya',
    imgPath: 'Papaya_Iconic.jpg',
    description:
      'Papayan has a salmon-pink pulp that is buttery in the texture. The fruit is rich in vitamin A and C.',
    title: 'Papaya',
  },
  {
    name: 'Passion-Fruit',
    imgPath: 'Passion-Fruit_Iconic.jpg',
    description:
      "Passion fruit is a small, round or oval fruit with yellow or dark brownish purple dented shell. Passion fruit's interior consists of many small edible kernels surrounded by succulent pulp. The taste is rich and fresh, and reminiscent of raspberries and orange.",
    title: 'Passion fruit',
  },
  {
    name: 'Peach',
    imgPath: 'Peach_Iconic.jpg',
    description:
      'Peach is a stone fruit with yellow or orange pulp and velvety shell. Suitable for eating naturally but can also be used for pastry, marmalade and jam.',
    title: 'Peach',
  },
  {
    name: 'PearAnjou',
    imgPath: 'Anjou_Iconic.jpg',
    description:
      'Anjou pear is a classic pear shaped with rounded stalk with a thin yellowish green shell. The pulp is juicy and has a sweet, nice taste. Anjou is an excellent table fruit that also fits in pastries, then rather unripe.',
    title: 'Pear Anjou',
  },
  {
    name: 'PearConference',
    imgPath: 'Conference_Iconic.jpg',
    description:
      'Conference is a medium sized pear with long-tapered bottle like shape and a rounded base. To the color, the Conference pear is light greenish yellow with gold brown spots. Pears taste the most when they are really ripe. Suitable for desserts, cheese tray or to eat as it is.',
    title: 'Pear Conference',
  },
  {
    name: 'PearKaiser',
    imgPath: 'Kaiser_Iconic.jpg',
    description:
      'The Kaiser Pear is drip-shaped with matte, medium-thick, flaming yellow-brown or brownish shell. The yellowish white pulp is crispy, juicy and sweet, with some fresh acid. Kaiser pears match very well with dessert cheeses and wine, but it is also good to cook, as it retains its shape well.',
    title: 'Pear Bosc-kaiser',
  },
  {
    name: 'Pineapple',
    imgPath: 'Pineapple_Iconic.jpg',
    description:
      'Pineapple fits well to be eaten naturally in for example desserts and fruit salad. Remember to remove the log in the middle.',
    title: 'Pineapple',
  },
  {
    name: 'Plum',
    imgPath: 'Plum_Iconic.jpg',
    description:
      'Ripe plums have soft and juicy pulp with sweet taste. Suitable for being eaten naturally, but is also used for preserving and pastries.',
    title: 'Plum Red',
  },
  {
    name: 'Pomegranate',
    imgPath: 'Pomegranate_Iconic.jpg',
    description:
      'Pomegranate has a sweet, gentle and refreshing taste, making pomegranate suitable for salads and desserts. It is only the kernels of the fruit that you eat. These are taken out by first cutting around the apple without destroying the core. Then turn both halves in opposite directions until they loosen. Finally, the kernels are loosened by knocking a wooden slab on the shell of the half, preferably over a bowl.',
    title: 'Pomegranate',
  },
  {
    name: 'Red-Grapefruit',
    imgPath: 'Red-Grapefruit_Iconic.jpg',
    description:
      'The red grapefruit has a red pulp and a slightly pink colored peel. The taste is characteristically bitter, but at the same time fresh and sour. The red grapefruit is sweeter than the blonde grapefruit.',
    title: 'Grapefruit Red',
  },
  {
    name: 'Satsumas',
    imgPath: 'Satsumas_Iconic.jpg',
    description:
      'Satsumas is a sweet and small type of citrus fruit. The fruit is popular as a snack.',
    title: 'Satsumas',
  },
  {
    name: 'Apple Juice',
    imgPath: 'Bravo-Apple-Juice_Iconic.jpg',
    description:
      'Ready to drink apple juice from concentrate. Fresh and sour taste. Fits the breakfast table, as quencher and meal drink.',
    title: 'Apple Juice',
  },
  {
    name: 'Orange Juice',
    imgPath: 'Bravo-Orange-Juice_Iconic.jpg',
    description:
      'Ready to drink orange juice from concentrate. Fresh and sour taste. Fits the breakfast table, as quencher and meal drink. Without pulp.',
    title: 'Orange Juice',
  },
  {
    name: 'Orange and Grapefruit Juice',
    imgPath: 'God-Morgon-Orange-Red-Grapefruit-Juice_Iconic.jpg',
    description:
      'God Morning Orange / Red Grapefruit is a fresh blend of sweet orange juice and tasty fresh red grapefruit.',
    title: 'Orange and Grapefruit Juice',
  },
  {
    name: 'Red Grapefruit Juice',
    imgPath: 'God-Morgon-Red-Grapefruit-Juice_Iconic.jpg',
    description:
      'God Morning Red Grapefruit is a real vitamin kick - mellow, rich in taste and as refreshing as only red grapefruit can be.',
    title: 'Red Grapefruit Juice',
  },
  {
    name: 'Golden Grapefruit Juice',
    imgPath: 'Tropicana-Golden-Grapefruit_Iconic.jpg',
    description:
      'Ready to drink juice with pulp pressed on grapefruit. Not from concentrate. Mildly pasteurized.',
    title: 'Golden Grapefruit Juice',
  },
  {
    name: 'Mandarin Juice',
    imgPath: 'Tropicana-Mandarin-Morning_Iconic.jpg',
    description:
      'Tropicana Mandarin Morning is a ready to drink juice without pulp pressed on orange, mandarin and grapes. Not from concentrate. Mildly pasteurized.',
    title: 'Mandarin Juice',
  },
  {
    name: 'Ecological Medium Fat Milk',
    imgPath: 'Arla-Ecological-Medium-Fat-Milk_Iconic.jpg',
    description:
      'Fresh skimmed Milk made from Swedish Milk from organic Arlagårdar. Skimmed milk has a delicious full flavor and is a popular choice for breakfast cereals, porridge or as a drink for the meal. Milk is a natural source of, for example, protein, calcium and vitamin B12. Protein contributes to muscle building and calcium is needed to maintain a normal bone structure. The brand Arla Ko guarantees that the product is made of 100% Swedish milk. The new brown carton has 24 percent lower climate impact compared to the previous white carton.',
    title: 'Ecological Medium Fat Milk',
  },
  {
    name: 'Lactose Free Medium Fat Milk',
    imgPath: 'Arla-Lactose-Medium-Fat-Milk_Iconic.jpg',
    description:
      'Lactose-free skimmed milk made from Swedish milk from Arlagårdar. The product is designed for adults and children with lactose intolerance and is therefore free from lactose. The skimmed milk has a delicious full-bodied milk flavor and is a popular choice for breakfast cereals, porridge or as a drink for the meal. The brand Arla Ko guarantees that the product is made of 100% Swedish milk.',
    title: 'Lactose Free Medium Fat Milk',
  },
  {
    name: 'Medium Fat Milk',
    imgPath: 'Arla-Medium-Fat-Milk_Iconic.jpg',
    description:
      'Fresh skimmed milk made from Swedish milk from Arlagårdar. Skimmed milk has a delicious full-bodied milk flavor and is a popular choice for breakfast cereals, porridge or as a drink for the meal. Milk is a natural source of, for example, protein, calcium and vitamin B12. Protein contributes to muscle building and calcium is needed to maintain a normal bone structure. The brand Arla Ko guarantees that the product is made of 100% Swedish milk.',
    title: 'Medium Fat Milk',
  },
  {
    name: 'Standard-Milk',
    imgPath: 'Arla-Standard-Milk_Iconic.jpg',
    description:
      'Fresh standard milk made from Swedish milk from Arlagårdar. The taste is round and full of clear flavors of cream. This makes it extra good for coffee, tea and chocolate. Standard milk can also be used for cooking, berries and porridge. Milk is a natural source of, for example, protein, calcium and vitamin B12. Protein contributes to muscle building and calcium is needed to maintain a normal bone structure. The brand Arla Ko guarantees that the product is made of 100 percent Swedish milk.',
    title: 'Standard-Milk',
  },
  {
    name: 'Organic skimmed milk',
    imgPath: 'Garant-Ecological-Medium-Fat-Milk_Iconic.jpg',
    description:
      "Organic skimmed milk from our Swedish KRAV farms. 1.5 percent fat. Garant's organic labeling tells us that a product is organic and sometimes even KRAV-labeled. Our assortment is constantly filled with more EKO products.",
    title: 'Organic skimmed milk 1,5%',
  },
  {
    name: 'Ecological milk',
    imgPath: 'Garant-Ecological-Standard-Milk_Iconic.jpg',
    description: 'Ecological milk from Swedish KRAV-labeled farms.',
    title: 'Ecological milk',
  },
  {
    name: 'Oat Yoghurt',
    imgPath: 'Oatly-Natural-Oatghurt_Iconic.jpg',
    description: 'Whole vegetable ghurt, used as yoghurt. Can also be used for cold sauces.',
    title: 'Oat Yoghurt',
  },
  {
    name: 'Oat Milk',
    imgPath: 'Oatly-Oat-Milk_Iconic.jpg',
    description:
      'A natural oat drink, enriched with calcium and vitamins. Has long shelf life and can be stored at room temperature.',
    title: 'Oat Milk',
  },
  {
    name: 'Ecological Sour Cream',
    imgPath: 'Arla-Ecological-Sour-Cream_Iconic.jpg',
    description:
      'KRAV-labeled sour cream made from fresh cream from Swedish organic Arlagårdar. Sour cream is a real classic that has its obvious place for both everyday and weekend. It has an acidic, creamy and fresh taste with a slightly creamy consistency and is excellent as a natural accessory or as a base in cold sauces and dressings. With its fresh acid it softens the heat from spicy dishes. The brand Arla Ko guarantees that the product is made of 100% Swedish milk.',
    title: 'Ecological Sour Cream',
  },
  {
    name: 'Sour Cream',
    imgPath: 'Arla-Sour-Cream_Iconic.jpg',
    description:
      'Sour cream made from fresh cream from Swedish Arlagårdar. Sour cream is a real classic that has its obvious place for both weekday and weekend. It has an acidic, creamy and fresh taste with a slightly creamy texture. The product is excellent as a natural accessory or as a base in cold sauces and dressings. With its fresh acid it softens the heat from spicy dishes. The brand Arla Ko guarantees that the product is made of 100% Swedish milk.',
    title: 'Sour Cream',
  },
  {
    name: 'Sour Milk',
    imgPath: 'Arla-Sour-Milk_Iconic.jpg',
    description:
      'Classic sour milk made from Swedish milk from Arlagårdar. The flavor is slightly acidic with characteristically sour milk aroma and light creaminess. The texture is a bit thicker and the sour milk can be eaten with muesli, cereal, fruit or berries. Sour milk has a long history in Sweden - already in the Viking era you have had sour milk-like products. The brand Arla Ko guarantees that the product is made of 100% Swedish milk.',
    title: 'Sour Milk',
  },
  {
    name: 'Blueberry Soy Yoghurt',
    imgPath: 'Alpro-Blueberry-Soyghurt_Iconic.jpg',
    description: 'Soy based ghurt, used as yoghurt, with mild blueberry taste and creamy texture.',
    title: 'Blueberry Soy Yoghurt',
  },
  {
    name: 'Vanilla Soy Yoghurt',
    imgPath: 'Alpro-Vanilla-Soyghurt_Iconic.jpg',
    description:
      'Soy based ghurt, used as yoghurt, with mild vanilla taste and and creamy texture.',
    title: 'Vanilla Soy Yoghurt',
  },
  {
    name: 'Vanilla Yoghurt',
    imgPath: 'Arla-Mild-Vanilla-Yoghurt_Iconic.jpg',
    description:
      'Mild and smooth vanilla yoghurt made of Swedish milk from Arlagårdar. The texture is creamy and tender, the taste soft and round. The yoghurt fits well for breakfast and snacks for the whole family. Eat it as it is or with muesli, flakes, fruit and berries. Vanilla yoghurt is also a perfect base for smoothies. The brand Arla Ko guarantees that the product is made of 100% Swedish milk.',
    title: 'Vanilla Yoghurt',
  },
  {
    name: 'Vanilla Low Fat Yoghurt',
    imgPath: 'Arla-Natural-Mild-Low-Fat-Yoghurt_Iconic.jpg',
    description:
      'Keyhole-labeled light yoghurt with creamy texture and natural taste. With its low fat content, the yoghurt is an excellent choice if you want to eat healthy without having to sacrifice the good taste. The yoghurt fits well for both breakfast and snacks. Eat it as it is or with muesli, flakes, fruit and berries. The brand Arla Ko guarantees that the product is made of 100% Swedish milk.',
    title: 'Vanilla Low Fat Yoghurt',
  },
  {
    name: 'Yoghurt',
    imgPath: 'Arla-Natural-Yoghurt_Iconic.jpg',
    description:
      'Creamy, slightly more acidic yoghurt with a clear yoghurt character. Acidic with selected bacterial strains giving extra clear yoghurt aroma. The yoghurt tastes as good for breakfast as snack and fits well with nuts, honey and fresh berries. With its creamy texture and clear acid, it is also great for kebab sauce, baking bread and yoghurt drinks. The brand Arla Ko guarantees that the product is made of 100% Swedish milk.',
    title: 'Yoghurt',
  },
  {
    name: 'Strawberry Yoghurt',
    imgPath: 'Yoggi-Strawberry-Yoghurt_Iconic.jpg',
    description:
      'Lovely creamy yoghurt rich in fruit. It is made of natural ingredients with a mild, round taste of strawberries and vanilla. Yoggi original is a pleasure that saturates and gives energy whenever you want. The taste is completely natural and it is the fruit that gives the yoghurt the fine color. The yoghurt suits the whole family and can be enjoyed at breakfast time, as a quick snack or a simple dessert. The symbol of the blueish yellow milk can guarantees 100 percent Swedish milk.',
    title: 'Strawberry Yoghurt',
  },
  {
    name: 'Asparagus',
    imgPath: 'Asparagus_Iconic.jpg',
    description:
      'Asparagus has a mild and nice taste and is good as an accessory, as well as a vegetable dishes by itself. Asparagus can be eaten raw, but is usually cooked by boiling in lightly salted water, or grilled. Fresh asparagus is recognized on the stiffness of the stalk, and is preferably stored in refrigerator temperature. The shelf life is maximum one week in the refrigerator, or a couple of days in room temperature.',
    title: 'Asparagus Green',
  },
  {
    name: 'Aubergine',
    imgPath: 'Aubergine_Iconic.jpg',
    description:
      'Aubergine, or eggplant as it is also called, is usually dark violet. It has a shiny peel and is 15-20 cm long. The pulp is white. Aubergine is always eaten cooked. In addition to Moussaka, Aubergine fits well in pots and gratins.',
    title: 'Aubergine',
  },
  {
    name: 'Cabbage',
    imgPath: 'Cabbage_Iconic.jpg',
    description:
      'White cabbage can be used as a raw food, but it also fits well in for example cabbage rolls, cabbage pudding, cabbage soup, etc.',
    title: 'Cabbage White Import',
  },
  {
    name: 'Carrots',
    imgPath: 'Carrots_Iconic.jpg',
    description:
      'The orange red color of the carrot comes from the high content of beta carotene, which in the body is converted into vitamin A. Tastefully, carrot is sweet, with a crunchy texture. Carrots can be eaten raw, and are also used in pots, gratins, soups and wok.',
    title: 'Carrot',
  },
  {
    name: 'Cucumber',
    imgPath: 'Cucumber_Iconic.jpg',
    description: 'Fresh cucumber. Fits well in the salad or on the sandwich.',
    title: 'Cucumber',
  },
  {
    name: 'Garlic',
    imgPath: 'Garlic_Iconic.jpg',
    description:
      'Garlic has unique flavor and smell, and is a good flavoring in pasta dishes, pots, mixes, etc.',
    title: 'Garlic',
  },
  {
    name: 'Ginger',
    imgPath: 'Ginger_Iconic.jpg',
    description:
      'Ginger is a herb with a characteristically sharp taste. It is used for flavoring and accessories, especially in Asian cuisine. Vegetables and curries, rice, pickles, meat and fish are good for flavoring with ginger. The rich aroma also fits well with cookies, biscuits, marmalades and sweet desserts.',
    title: 'Ginger',
  },
  {
    name: 'Leek',
    imgPath: 'Leek_Iconic.jpg',
    description:
      'Leek has a slightly milder onion flavor and is preferably used for soups and pots, but can also be finely shredded into a salad. It is mainly the white part that is used, although it is fine to eat the green leaves.',
    title: 'Leek',
  },
  {
    name: 'MushroomBrown-Cap-Mushroom',
    imgPath: 'Brown-Cap-Mushroom_Iconic.jpg',
    description:
      'The forest mushroom is also called chestnut mushroom, and is a brown mushroom with a fuller flavor than the white mushrooms. It can be eaten raw in for example salads, but are also good to boil, pan-fry or fry.',
    title: 'Forest mushroom',
  },
  {
    name: 'OnionYellow-Onion',
    imgPath: 'Yellow-Onion_Iconic.jpg',
    description: 'Yellow onion is a good flavoring. Fits well both cold and hot in cooking.',
    title: 'Onion Yellow',
  },
  {
    name: 'PepperGreen-Bell-Pepper',
    imgPath: 'Green-Bell-Pepper_Iconic.jpg',
    description:
      'There are a variety of colors of peppers. The most common ones are green, yellow, orange, red and white. The paprika always starts as green, but then shifts color when the it becomes more ripe. A green pepper is an unripe and hence a little firmer than the other ones, making it suitable for warm dishes, for example chili con carne, pies, gratin and various pots.',
    title: 'Pepper Green',
  },
  {
    name: 'PepperOrange-Bell-Pepper',
    imgPath: 'Orange-Bell-Pepper_Iconic.jpg',
    description:
      'The orange pepper is sweeter than the green. It also contains more vitamins and antioxidants than the green. Peppers are good to eat raw in salads and as garnish, but are also good to fry, stew or gratinate, for example with filling. Paprika also fits well in pots, gratins and pies.',
    title: 'Pepper Orange',
  },
  {
    name: 'PepperRed-Bell-Pepper',
    imgPath: 'Red-Bell-Pepper_Iconic.jpg',
    description:
      'The red peppers are much sweeter than the green ones. It also contains more vitamins and antioxidants than the green. Peppers are good to eat raw in salads and as garnish, but are also good to fry, stew or gratinate, for example. with filling. Paprika also fits well in pots, gratins and pies.',
    title: 'Pepper Red',
  },
  {
    name: 'PepperYellow-Bell-Pepper',
    imgPath: 'Yellow-Bell-Pepper_Iconic.jpg',
    description:
      'The yellow pepper is much sweeter than the green. It also contains more vitamins and antioxidants than the green. Peppers are good to eat raw in salads and as garnish, but are also good to fry, stew or gratinate, for example with filling. Paprika also fits well in pots, gratins and pies.',
    title: 'Pepper Yellow',
  },
  {
    name: 'PotatoFloury-Potato',
    imgPath: 'Floury-Potato_Iconic.jpg',
    description: 'Floury potatoes. Extra good for mashed potatoes and to press.',
    title: 'Potato Floury',
  },
  {
    name: 'PotatoSolid-Potato',
    imgPath: 'Solid-Potato_Iconic.jpg',
    description: 'Solid potatoes. A good allround potato that fits well most of the time.',
    title: 'Potato Solid',
  },
  {
    name: 'PotatoSweet-Potato',
    imgPath: 'Sweet-Potato_Iconic.jpg',
    description:
      'Sweet potatoes are oblong, irregularly shaped tubers, often slightly larger than regular potatoes. The peel is light brown or red. There are two varieties, one with light pulp and one with yellow orange pulp. Sweet potatoes are used like regular potatoes, but the taste is very different. The sweet potato is very sweet and a bit softer than regular potatoes. It can also be used in desserts, pies and cakes.',
    title: 'Sweet potato',
  },
  {
    name: 'Red-Beet',
    imgPath: 'Red-Beet_Iconic.jpg',
    description:
      'Red beets has an earthy and sweet taste and is often eaten on the side, either cooked or preserved. It is also common to make red beet soup, but the beet can also be shredded as raw food. Red beets are slightly sensitive to heat, frostbites and dehydration and should therefore be kept cool.',
    title: 'Red beet',
  },
  {
    name: 'TomatoBeef-Tomato',
    imgPath: 'Beef-Tomato_Iconic.jpg',
    description:
      'An extra large tomato suitable for well for hamburgers and on the grill or in the oven.',
    title: 'Beef tomato',
  },
  {
    name: 'TomatoRegular-Tomato',
    imgPath: 'Regular-Tomato_Iconic.jpg',
    description:
      'Round and fine tomatoes from Sweden. Rinse and have in the salad or on the sandwich.',
    title: 'Tomato',
  },
  {
    name: 'TomatoVine-Tomato',
    imgPath: 'Vine-Tomato_Iconic.jpg',
    description:
      'Round tomatoes with vines in the package. Rinse and have in the salad or on the sandwich.',
    title: 'Vine tomato',
  },
  {
    name: 'Zucchini',
    imgPath: 'Zucchini_Iconic.jpg',
    description: 'Zucchini can be eaten raw, but is usually used in soups, pots, stews, etc.',
    title: 'Zucchini',
  },
];

export const getMockProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(gjson);
    }, 100);
  });
};
