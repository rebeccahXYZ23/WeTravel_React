import "./Destination.css";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Breathtaking Tourist Spots found in the Philippines</p>
      <DestinationData
        className="first-des"
        heading="Banaue Rice Terraces"
        text="The Rice Terraces of the 
Philippine Cordilleras is an
 outstanding example of an evolved, 
 living cultural landscape that can be traced as far back as two millennia ago in the pre-colonial Philippines. The terraces are located in the remote areas of the Philippine
  Cordillera mountain range on the northern island of Luzon, Philippine archipelago. While the historic terraces cover an extensive area, the inscribed property consists of five clusters of the most intact and impressive terraces, located in four municipalities.  They are all the product of the Ifugao ethnic group, a minority community that has occupied these mountains for thousands of years.
"
        img1="https://images.unsplash.com/photo-1480996408299-fc0e830b5db1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
        img2="https://images.unsplash.com/photo-1505471768190-275e2ad7b3f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
      />

      <DestinationData
        className="first-des-reverse"
        heading="Puerto-Princesa Subterranean River National Park"
        text="This park features a spectacular limestone karst landscape with an underground river. One of the river's distinguishing features is that it emerges directly into the sea, and its lower portion is subject to tidal influences. The area also represents a significant habitat for biodiversity conservation. The site contains a full 'mountain-to-sea' ecosystem and has some of the most important forests in Asia."
        img1="https://images.unsplash.com/photo-1660849259228-603fad947b89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHVlcnRvJTIwcHJpbmNlc2ElMjB1bmRlcmdyb3VuZCUyMHJpdmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        img2="https://images.unsplash.com/photo-1581216061628-2187b387eb5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=877&q=80"
      />
      <DestinationData
        className="first-des-reverse-2"
        heading="Mount Mayon"
        text="Mayon Volcano towers above the region, primarily in Legazpi City, and provides a breathtaking backdrop wherever you are in the province. 

Legend has it that its name came from ‘magayon’, a Bicolano word that means beautiful which is more than appropriate to describe how stunning this natural scenery is from every angle.
Legazpi City, the main destination for those visiting Mayon Volcano, is best visited during the dry months between March through May. Considerable amount of rainfall is expected from July to September."
        img1="https://gttp.imgix.net/266086/x/0/guide-to-mayon-volcano-in-albay-bicol-world-s-most-perfect-volcanic-cone-1.jpg?auto=compress%2Cformat&ch=Width%2CDPR&dpr=1&ixlib=php-3.3.0&w=883"
        img2="https://gttp.imgix.net/266088/x/0/guide-to-mayon-volcano-in-albay-bicol-world-s-most-perfect-volcanic-cone-3.jpg?auto=compress%2Cformat&ch=Width%2CDPR&dpr=1&ixlib=php-3.3.0&w=883"
      />
    </div>
  );
};
export default Destination;
