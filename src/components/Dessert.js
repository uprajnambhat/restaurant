import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styleSheets/breakFastAndDessertStyleSheet.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/esm/Button";
import { eachItemCount, onAddClick, onSubtractClick } from "../utils";

const Dessert = () => {
  const dispatch = useDispatch();
  const { dessertMenu = [], selectedItems = [] } = useSelector(
    (state) => state.menuDetails
  );
  useEffect(() => {
    if (dessertMenu?.length == 0) {
      axios
        .get("http://localhost:3004/dessert/dessertMenu")
        .then((response) => {
          console.log("dessert hooray", response.data);
          dispatch({
            type: "UPDATE_DESSERT_MENU",
            payload: response.data,
          });
        })
        .catch((error) => {
          console.log("error");
          dispatch({
            type: "UPDATE_DESSERT_MENU",
            payload: [
              {
                id: 1,
                title: "Lemon cheesecake",
                previewDescription: "A cheesecake made of lemon",
                detailDescription:
                  "Cheesecake is a sweet dessert consisting of one or more layers. The main, and thickest layer, consists of a mixture of soft, fresh cheese (typically cream cheese or ricotta), eggs, and sugar; if there is a bottom layer it often consists of a crust or base made from crushed cookies (or digestive biscuits), graham crackers, pastry, or sponge cake. It may be baked or unbaked (usually refrigerated). Cheesecake is usually sweetened with sugar and may be flavored or topped with fruit, whipped cream, nuts, cookies, fruit sauce, and/or chocolate syrup. Cheesecake can be prepared in many flavors, such as strawberry, pumpkin, key lime, chocolate, Oreo, chestnut, or toffee.",
                image:
                  "https://raw.githubusercontent.com/filippella/Dagger-Rx-Database-MVP/master/cakes/lemoncheese_cake.jpg",
              },
              {
                id: 2,
                title: "Victoria sponge",
                previewDescription: "sponge with jam",
                detailDescription:
                  "The Victoria sponge, also known as the Victoria sandwich or Victorian Cake, was named after Queen Victoria, who was known to enjoy a slice of the sponge cake with her afternoon tea. It is often referred to simply as 'sponge cake', though it contains additional fat. A typical Victoria sponge consists of raspberry jam and whipped double cream or vanilla cream. The jam and cream are sandwiched between two sponge cakes; the top of the cake is not iced or decorated apart from a dusting of icing sugar. A Victoria sponge is made using one of two methods. The traditional method involves creaming caster sugar with fat (usually butter), mixing thoroughly with beaten egg, then folding flour and raising agent into the mixture. The modern method, using an electric mixer or food processor, involves simply whisking all the ingredients together until creamy. Additionally, the modern method typically uses an extra raising agent, and some recipes call for an extra-soft butter or margarine. Both the traditional and modern methods are relatively quick and simple, producing consistent results, making this type of mixture one of the most popular for children and people in a hurry. This basic 'cake' mixture has been made into an endless variety of treats and puddings, including cupcakes, chocolate cake, Eve's pudding, and many others.",
                image:
                  "https://raw.githubusercontent.com/filippella/Dagger-Rx-Database-MVP/master/cakes/victoria_sponge.jpg",
              },
              {
                id: 3,
                title: "Carrot cake",
                previewDescription: "Bugs bunnys favourite",
                detailDescription:
                  "Carrot cake closely resembles a quick bread in method of preparation (all the wet ingredients, such as the eggs and sugar, are mixed, all the dry ingredients are mixed, and the wet are then added to the dry) and final consistency (which is usually denser than a traditional cake and has a coarser crumb). Many carrot cake recipes include optional ingredients, such as kirsch, cinnamon, nuts, pineapple or raisins. The most common icing on carrot cake is icing sugar and lemon juice or icing sugar and kirsch (Europe) and an icing with icing sugar, butter and cream cheese (United States). As the cake is relatively moist, it can be conserved longer than many other types of cakes.",
                image:
                  "https://raw.githubusercontent.com/filippella/Dagger-Rx-Database-MVP/master/cakes/carrot_cake.jpg",
              },
              {
                id: 4,
                title: "Banana cake",
                previewDescription:
                  "Banana cake is a cake prepared using banana",
                detailDescription:
                  "Banana cake is prepared using banana as a primary ingredient and typical cake ingredients such as flour, sugar, eggs, butter, margarine or oil and baking soda. The bananas can be mashed or puréed using a food processor or electric mixer and mixed into the cake batter, and the cake can also be topped or garnished with sliced bananas. Banana cake may be prepared as a use for browned or overly-ripe bananas. Chocolate may be used as an ingredient, which along with the banana is an enjoyable flavor combination for some people. Nuts such as walnuts and macadamias may be used in the batter and to top and garnish the cake.",
                image:
                  "https://raw.githubusercontent.com/filippella/Dagger-Rx-Database-MVP/master/cakes/banana_cake.jpg",
              },
              {
                id: 5,
                title: "Birthday cake",
                previewDescription: "a yearly treat",
                detailDescription:
                  "The birthday cake has been an integral part of the birthday celebrations in western European countries since the middle of the 19th century, which extended to Western culture. Certain rites and traditions, such as singing of birthday songs, associated with birthday cakes are common to many Western cultures. The Western tradition of adding lit candles to the top of a birthday cake originates in 18th-century Germany. However, the intertwining of cakes and birthday celebrations stretches back to the ancient Romans. The development of the birthday cake has followed the development of culinary and confectionery advancement. While throughout most of Western history, these elaborate cakes in general were the privilege of the wealthy, birthday cakes are nowadays common to most Western birthday celebrations. Around the world many variations of the birthday cake, or rather the birthday pastry and sweets, exist. There is no universal rule about the shape and color of a birthday cake – in recent years for example cakes take the form of animals or have high-quality drawings on them in order to fit the party theme. In India the most popular cake is Black Forest Cakes.",
                image:
                  "https://raw.githubusercontent.com/filippella/Dagger-Rx-Database-MVP/master/cakes/birthday_cake.JPG",
              },
              {
                id: 6,
                title: "Avocado cake",
                previewDescription:
                  "Avocado cake is a cake prepared using avocado",
                detailDescription:
                  "Avocado cake is a cake prepared using avocado as a primary ingredient, together with other typical cake ingredients. The avocados may be mashed, and may be used as an ingredient in cake batter, in cake toppings and alone atop a cake. Cake variations include raw avocado cake, avocado brownies and avocado cheesecake. Raw, uncooked versions of avocado cake can be high in vitamin E and essential fatty acids, which are derived from avocado. Avocado-based cake toppings include avocado fool and avocado crazy.",
                image:
                  "https://raw.githubusercontent.com/filippella/Dagger-Rx-Database-MVP/master/cakes/avocado_cake.jpg",
              },
              {
                id: 7,
                title: "Chocolate cake",
                previewDescription:
                  "Chocolate cake is a cake flavored with melted chocolate, cocoa powder, or sometimes both.",
                detailDescription:
                  "Chocolate cake is made with chocolate; it can be made with other ingredients, as well. These ingredients include fudge, vanilla creme, and other sweeteners. The history of chocolate cake goes back to 1764, when Dr. James Baker discovered how to make chocolate by grinding cocoa beans between two massive circular millstones.",
                image:
                  "https://raw.githubusercontent.com/filippella/Dagger-Rx-Database-MVP/master/cakes/chocolate_cake.jpg",
              },
              {
                id: 8,
                title: "Clementine cake",
                previewDescription:
                  "Clementine cake is a cake prepared with clementine fruit",
                detailDescription:
                  "Clementine cake is a cake prepared with clementine fruit as a primary ingredient and other typical cake ingredients. Additional ingredients may be used, and some preparation variations exist. It may be prepared using whole or peeled clementines that have been manually-seeded, or seedless fruit may be used. It may provide significant amounts of Vitamin D. It may be topped with a sweet glaze or sauce, powdered sugar, honey and clementines or candied clementines. Its origin may be roughly based upon an orange cake developed by the Sephardi Jews.",
                image:
                  "https://raw.githubusercontent.com/filippella/Dagger-Rx-Database-MVP/master/cakes/clementine_cake.png",
              },
              {
                id: 9,
                title: "Fudge cake",
                previewDescription:
                  "A fudge cake is a chocolate cake containing fudge",
                detailDescription:
                  "This recipe is also known as 'Death by Chocolate', as it contains a considerable amount of chocolate, if topped with chocolate ice cream and lashings of whipped cream. In addition to Death By Chocolate, the many variations include pudding fudge cake, made with chocolate cake mix, chocolate pudding, and chocolate chips. Alternatively, 'fudge cake' is a term in the American South to refer to a dense, single-layer chocolate cake served with or without icing. It is similar to a brownie, although moister with more chocolate.",
                image:
                  "https://raw.githubusercontent.com/filippella/Dagger-Rx-Database-MVP/master/cakes/fudge_cake.jpg",
              },
              {
                id: 10,
                title: "Spice cake",
                previewDescription:
                  "Spice cake is traditionally flavored with a mixture of spices.",
                detailDescription:
                  "Spice cake is traditionally flavored with a mixture of spices. The cake can be prepared in many varieties. Predominant flavorings include spices such as cinnamon, cloves, allspice, ginger and nutmeg.",
                image:
                  "https://raw.githubusercontent.com/filippella/Dagger-Rx-Database-MVP/master/cakes/spice_cake.jpg",
              },
              {
                id: 11,
                title: "Jewish apple cake",
                previewDescription:
                  "Jewish apple cake is a kind of dense cake made with apples and sold mostly in Pennsylvania in the United States.",
                detailDescription:
                  "Jewish apple cake is a kind of dense cake made with apples and sold mostly in Pennsylvania in the United States. It has limited known connections to Jewish cuisine. It is thought that this cake is actually a Pennsylvania Dutch culinary item that was erroneously attributed to Jews because it seemed 'old world'. It may also be considered Jewish because it contains no dairy, and it may therefore be eaten with meals containing meat, in accordance with Jewish laws of kashrut.",
                image:
                  "https://raw.githubusercontent.com/filippella/Dagger-Rx-Database-MVP/master/cakes/jewish_apple_cake.jpg",
              },
              {
                id: 12,
                title: "Plum cake",
                previewDescription:
                  "Plum cake refers to a wide range of cakes made with either dried fruit or with fresh fruit.",
                detailDescription:
                  "Plum cake refers to a wide range of cakes made with either dried fruit (such as grapes, currants, raisins or prunes) or with fresh fruit. There is a wide range of popular plum cakes and puddings. Since the meaning of the word 'plum' has changed over time, many items referred to as plum cakes and popular in England since at least the eighteenth century have now become known as fruitcake. The English variety of plum cake also exists on the European mainland, but may vary in ingredients and consistency. Settlers in British colonies brought the dried fruit variety of cake with them, so that for example, in India it was served around the time of the Christmas holiday season and in the American colonies, where it became associated with elections, one version came to be called 'election cake'.",
                image:
                  "https://raw.githubusercontent.com/filippella/Dagger-Rx-Database-MVP/master/cakes/plum_cake.jpg",
              },
              {
                id: 13,
                title: "Apple cake",
                previewDescription:
                  "Apple cake is a popular dessert produced with the main ingredient of apples.",
                detailDescription:
                  "Apple cake is a popular dessert produced with the main ingredient of apples. Such a cake is made through the process of slicing this sweet fruit to add fragrance to a plain cake base. Traditional apple cakes go a step further by including various spices such as nutmeg or cinnamon, which give a unique flavour. Upon the addition of spices the batter can also be accompanied by crushed nuts, the most popular being walnuts and almonds.",
                image:
                  "https://raw.githubusercontent.com/filippella/Dagger-Rx-Database-MVP/master/cakes/apple_cake.JPG",
              },
              {
                id: 14,
                title: "Bulla cake",
                previewDescription:
                  "Bulla cake is a rich Jamaican cake made with molasses and spiced with ginger and nutmeg.",
                detailDescription:
                  "Bulla cake, usually referred to as bulla, is a rich Jamaican cake made with molasses and spiced with ginger and nutmeg, sometimes dark-colored and other times light-colored. Bulla are small loaves that are flat and round. They are inexpensive and easy to make using molasses, flour and baking soda. Bulla is traditionally a popular treat for schoolchildren. It is usually eaten with cheese, butter or avocado.",
                image:
                  "https://raw.githubusercontent.com/filippella/Dagger-Rx-Database-MVP/master/cakes/bulla_cake.jpg",
              },
              {
                id: 15,
                title: "Jaffa cake",
                previewDescription: "Jaffa Cakes are biscuit-sized cakes.",
                detailDescription:
                  "Jaffa Cakes are biscuit-sized cakes introduced by McVitie and Price in the UK in 1927 and named after Jaffa oranges. The most common form of Jaffa Cakes are circular, 2 1⁄8 inches (54 mm) in diameter and have three layers: a Genoise sponge base, a layer of orange flavoured jelly and a coating of chocolate. Jaffa Cakes are also available as bars or in small packs, and in larger and smaller sizes. The original Jaffa Cakes come in packs of 12, 24 or 36.",
                image:
                  "https://raw.githubusercontent.com/filippella/Dagger-Rx-Database-MVP/master/cakes/jaffa_cake.png",
              },
              {
                id: 16,
                title: "Strawberry cake",
                previewDescription:
                  "Strawberry cake is a crumbly bread made by strawberry.",
                detailDescription:
                  "Strawberry cake is a cake that uses strawberry as a primary ingredient. Strawberries may be used in the cake batter, atop cakes and in a strawberry cake's frosting. Some are served chilled or partially frozen, and they are sometimes served as a Valentine's Day dish. The cake has been served as part of the events at the Strawberry Festival in the La Trinidad, Benguet municipality of the Philippines.",
                image:
                  "https://raw.githubusercontent.com/filippella/Dagger-Rx-Database-MVP/master/cakes/strawberry_cake.jpg",
              },
            ],
          });
        });
    }
  }, []);
  const onPlusClick = (name = "") => {
    console.log("sum of", onAddClick(name, selectedItems));
    dispatch({
      type: "UPDATE_SELECTED_ITEMS",
      payload: onAddClick(name, selectedItems),
    });
  };

  const onMinusClick = (name = "") => {
    dispatch({
      type: "UPDATE_SELECTED_ITEMS",
      payload: onSubtractClick(name, selectedItems),
    });
  };
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div className="menuItemsPageStyle">
              <h5>BreakFast Menu</h5>
              <div className="cardContainer">
                {dessertMenu.map((eachDessert, index) => {
                  const { title: name = "", image } = eachDessert;
                  return (
                    <div
                      key={`eachDessert ${index}`}
                      className="cardHolder"
                      style={{ height: "190px" }}
                    >
                      <div className="itemDetails">
                        <h5>{name}</h5>
                        <p>
                          <span style={{ color: "red", fontSize: "18px" }}>
                            $
                          </span>
                          20
                        </p>
                        <div className="quantityAndSigns">
                          <Button
                            onClick={() => {
                              onMinusClick(name);
                            }}
                            className="qtyButtonStyle"
                          >
                            -
                          </Button>
                          <p>{eachItemCount(name, selectedItems)}</p>
                          <Button
                            onClick={() => {
                              onPlusClick(name);
                            }}
                            className="qtyButtonStyle"
                          >
                            +
                          </Button>
                        </div>
                      </div>
                      <div className="cakeImages">
                        <img src={image} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dessert;
