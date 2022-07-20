'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    
     await queryInterface.bulkInsert('entries', [{
       date: '2008-11-11',
       title: 'Lorem Ipsum',
       mood: 'Grateful',
       description: "Radiant nag champa native american ancestry, past life The Secret open-minded vitamin. Reproductive system fertility awareness henna tattoo dharma Braggs, om projecting. White sage positive affirmation kirtan divine feminine sarong, harmful electromagnetic fields tofurkey personal development combined energy fields. Chanting blue whale spirit animal astral plane nonlinear transformative mercury retrograde bodyworker, awareness ganja. Spinal awareness rites of passage watsu, Hafiz flax enlightenment gifting circle. Peacock feather hooping veganism closing circle non-attachment, workshop soothing vibrations. With the dolphins seaweed tempeh nonviolent communication, indigenous elders Whole Earth Catalog new paradigm djembe barefoot running incense quarter moon lentils. Heart-based radical honesty patchouli, sarong popcorn with brewers yeast. Surrender yerba matte hooping toxins personal development, kombucha superfood. Apple cider vinegar rites of passage monogamish trauma-based peace Braggs, burning man kirlian photography deep. Biodiesel third eye acroyoga, birth name sustainable equinox reconnect shamanic free tibet. The dali lama human potential promoting positive change dance dome, acid ecofriendly. Namaste.",
        
     }], {});
    
   
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

     await queryInterface.bulkDelete('entries', null, {});
  }
};
