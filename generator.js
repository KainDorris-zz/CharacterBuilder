function CharacterIdentifier(name, class, level, background, playername, race, alignment, experiencepoints){
	this.name = name;
	this.class = class;
	this.level = level;
	this.background = background;
	this.playername = playername;
	this.race = race;
	this.alignment = alignment;
	this.experiencepoints = experiencepoints;
};

function AbilityScores(strength, dexterity, constitution, intelligence, wisdom, charisma){
	this.strength = strength;
	this.dexterity = dexterity;
	this.constitution = constitution;
	this.intelligence = intelligence;
	this.wisdom = wisdom;
	this.charisma = charisma;
};

function SavingThrows(strength, dexterity, constitution, intelligence, wisdom, charisma){
	this.strength = strength;
	this.dexterity = dexterity;
	this.constitution = constitution;
	this.intelligence = intelligence;
	this.wisdom = wisdom;
	this.charisma = charisma;
};

function Skills(name, proficient, rank){
	this.name = name;
	this.proficient = proficient;
	this.rank = rank;
};

function Inspiration(inspiration){
	this.inspiration = inspiration;
};

function ProficiencyBonus(bonus){
	this.bonus = proficiencybonus;
};

function Vitals(armorclass, initiative, speed, hitpointmax, currenthitpoints, temporaryhitpoints, hitdicetype, hitdicetotal, deathsaves){
	this.armorclass = armorclass;
	this.initiative = initiative;
	this.hitpointmax = hitpointmax;
	this.currenthitpoints = currenthitpoints;
	this.temporaryhitpoints = temporaryhitpoints;
	this.hitdicetype = hitdicetype;
	this.hitdicetotal = hitdicetotal;
	this.deathsaves = deathsaves; 
};

function Attacks(name, bonus, damage, damagetype){
	this.name = name;
	this.bonus = bonus;
	this.damage = damage;
	this.type = damagetype; 
};

function Languages(languages){
	this.languages = languages;
};

function Equipment(currency, equipment){
	this.currency = currency;
	this.equipment = equipment; 
};

function Personality(peronalitytraits, ideals, bonds, flaws){
	this.peronalitytraits = peronalitytraits;
	this.ideals = ideals;
	this.bonds = bonds;
	this.flaws = flaws; 
};

function Features (feature){
	this.feature = feature;
};

function Traits(traits) {
	this.traits = traits; 
};

function SpellCastingTraits(spellcastingability, spellsavedc,spellattackbonus) {
	this.spellcastingability = spellcastingability;
	this.spellsavedc = spellsavedc;
	this.spellattackbonus = spellattackbonus;
};

function Spells(spelllevel, spellname, spellrequirements, spellcomponents, spelldamage, spelleffect, spellrange, spellduration) {
	
};





