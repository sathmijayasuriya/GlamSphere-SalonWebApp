const servicesData = {
    Hair: [
      {
        image: "https://res.cloudinary.com/dk239jmcl/image/upload/v1737556029/samples/ecommerce/salon/hair/Consultation_hke4ie.webp",
        title: "Consultations",
        description: "Collaborate with your stylist on cuts, colors, etc. to see what service is best to meet your hair goals. This service is a consultation only, a full service will be booked after determining your hair needs.",
        price: "$70",
        duration: "15 min",
      },
      {
        image: "https://res.cloudinary.com/dk239jmcl/image/upload/v1737556649/samples/ecommerce/salon/hair/Haircut_Chin_Length_or_Longer_ds1fxj.jpg",
        title: "Haircut & Styles",
        description: "Select this option for haircuts chin length or below. It includes a Lunatic Fringe shampoo experience, scalp massage, cut, blow dry, and style. Each haircut is customized to your specific preference. (For clipper work please select Haircut â€“ Short, Pixie, or Barbered).",
        price: "$70",
        duration: "60 min",
      },
      {
        image: "https://res.cloudinary.com/dk239jmcl/image/upload/v1737565578/samples/ecommerce/salon/hair/Brazilian_Blow-out_kkp5ew.jpg",
        title: "Texture Services",
        description: "Select this option for Short, Pixie, or Barbered haircuts. It includes a Lunatic Fringe shampoo experience, scalp massage, cut, blow dry, and style. Each haircut is customized to your specific preference.",
        price: "$70",
        duration: "60 min",
      },
      {
        image: "https://res.cloudinary.com/dk239jmcl/image/upload/v1737556647/samples/ecommerce/salon/hair/Highlights_fu3rj1.jpg",
        title: "Highlights",
        description: "A color technique that involves applying highlights or lowlights throughout the head of hair, creating added depth and dimension. This service includes a stress relieving shampoo, scalp massage, blow dry, and style.",
        price: "$70",
        duration: "150 min",
      },
      {
        image: "https://res.cloudinary.com/dk239jmcl/image/upload/v1737565367/samples/ecommerce/salon/hair/dimenn_ohcanx.jpg",
        title: "Dimensional Colors",
        description: "Experience the transformative power of an artistic dimensional hair color, where expertly placed dark and light tones come together for a strikingly bold and captivating effect, crafted with creativity and precision. This services includes a stress relieving shampoo, scalp massage, blow dry, and style.",
        price: "$70",
        duration: "15 min",
      },
      {
        image: "https://res.cloudinary.com/dk239jmcl/image/upload/v1737565361/samples/ecommerce/salon/hair/Hair_treatmenets_b7csni.jpg",
        title: "Hair treatmenets",
        description: "A coloring service where one color is applied all over the head at the new growth or an all-over application of one color from roots to ends. A single process does not include Fantasy Coloring, Foil Work etc. Additional charges may apply based on length and thickness of hair. This service includes a stress relieving shampoo, scalp massage, blow dry, and style.",
        price: "$70",
        duration: "120 min",
      },
      {
        image: "https://res.cloudinary.com/dk239jmcl/image/upload/v1737565360/samples/ecommerce/salon/hair/Wax_and_Tinting_nuqoi2.jpg",
        title: "Wax and Tinting",
        description: "A coloring service where one color is applied all over the head at the new growth or an all-over application of one color from roots to ends. A single process does not include Fantasy Coloring, Foil Work etc. Additional charges may apply based on length and thickness of hair. This service includes a stress relieving shampoo, scalp massage, haircut, blow dry, and style.",
        price: "$70",
        duration: "120 min",
      },
      {
        image: "https://res.cloudinary.com/dk239jmcl/image/upload/v1737565360/samples/ecommerce/salon/hair/Hair_Extenstions_enmrp1.jpg",
        title: "Hair Extenstions",
        description: "Hair extensions are cosmetic accessories used to add length, volume, and thickness to natural hair. They come in various types, including clip-in, tape-in, sew-in, and fusion extensions.",
        price: "$70",
        duration: "120 min",
      },
      {
        image: "https://res.cloudinary.com/dk239jmcl/image/upload/v1737555851/samples/ecommerce/salon/hair/Advanced_Blonding_Haircut_1_q0tsiz.webp",
        title: "Advanced Blonding & Haircut",
        description: "An advanced high impact color placement using lightner. This coloring technique involves multiple blonding techniques of Foil work, hair-painting and balayage to create maximum blonde impact. An advanced high impact color placement using lightner. This coloring technique involves multiple blonding techniques of foil work, hair-painting and balayage. This services includes a stress relieving shampoo, scalp massage, cut, blow dry, and style",
        price: "$50",
        duration: "150 min",
      },
    ],
    Face: [
      {
        image: "https://via.placeholder.com/150",
        title: "Facial",
        description: "Relaxing facial treatments for glowing skin.",
        price: "$40",
        duration: "30 min",
      },
    ],
    SkinCare :[
        {
            image: "https://via.placeholder.com/150",
            title: "Cleanser",
            description: "A gentle cleanser that helps to remove dead skin cells and impurities.",
            price: "$20",
            duration: "15 min",
          },
          {
            image: "https://via.placeholder.com/150",
            title: "Cleanser",
            description: "A gentle cleanser that helps to remove dead skin cells and impurities.",
            price: "$20",
            duration: "15 min",
          },
        
    ],
    Body :[
        {
            image: "https://via.placeholder.com/150",
            title: "Cleanser",
            description: "A gentle cleanser that helps to remove dead skin cells and impurities.",
            price: "$20",
            duration: "15 min",
          },
          {
            image: "https://via.placeholder.com/150",
            title: "Cleanser",
            description: "A gentle cleanser that helps to remove dead skin cells and impurities.",
            price: "$20",
            duration: "15 min",
          },
        
    ],
    Nails :[
        {
            image: "https://via.placeholder.com/150",
            title: "Cleanser",
            description: "A gentle cleanser that helps to remove dead skin cells and impurities.",
            price: "$20",
            duration: "15 min",
          },
          {
            image: "https://via.placeholder.com/150",
            title: "Cleanser",
            description: "A gentle cleanser that helps to remove dead skin cells and impurities.",
            price: "$20",
            duration: "15 min",
          },
        
    ],
    Treatments :[
        {
            image: "https://via.placeholder.com/150",
            title: "Cleanser",
            description: "A gentle cleanser that helps to remove dead skin cells and impurities.",
            price: "$20",
            duration: "15 min",
          },
          {
            image: "https://via.placeholder.com/150",
            title: "Cleanser",
            description: "A gentle cleanser that helps to remove dead skin cells and impurities.",
            price: "$20",
            duration: "15 min",
          },
        
    ],
    Makeup :[
        {
            image: "https://via.placeholder.com/150",
            title: "Cleanser",
            description: "A gentle cleanser that helps to remove dead skin cells and impurities.",
            price: "$20",
            duration: "15 min",
          },
          {
            image: "https://via.placeholder.com/150",
            title: "Cleanser",
            description: "A gentle cleanser that helps to remove dead skin cells and impurities.",
            price: "$20",
            duration: "15 min",
          },
        
    ],
  };
  export default servicesData;