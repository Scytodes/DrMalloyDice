Hooks.once('diceSoNiceReady', (dice3d) => {
	dice3d.addSystem({id: "DrMalloyDice", name: "Dr Malloy's Dice"}, false);
	dice3d.addDicePreset({
		type: "d2",
		modelFile: "modules/DrMalloyDice/DrMalloyDice_d2.glb",
		system: "DrMalloyDice",
		emissive: "0x009d73"
	});
	dice3d.addDicePreset({
		type: "dc",
		modelFile: "modules/DrMalloyDice/DrMalloyDice_d2.glb",
		system: "DrMalloyDice",
		emissive: "0x009d73"
	});
		dice3d.addDicePreset({
		type: "d4",
		modelFile: "modules/DrMalloyDice/DrMalloyDice_d4.glb",
		system: "DrMalloyDice",
		emissive: "0x009d73"
	});
		dice3d.addDicePreset({
		type: "d3",
		modelFile: "modules/DrMalloyDice/DrMalloyDice_d3.glb",
		system: "DrMalloyDice",
		emissive: "0x009d73"
	});
		dice3d.addDicePreset({
		type: "d6",
		modelFile: "modules/DrMalloyDice/DrMalloyDice_d6.glb",
		system: "DrMalloyDice",
		emissive: "0x009d73"
	});
		dice3d.addDicePreset({
		type: "d8",
		modelFile: "modules/DrMalloyDice/DrMalloyDice_d8.glb",
		system: "DrMalloyDice",
		emissive: "0x009d73"
	});
	
		dice3d.addDicePreset({
		type: "d12",
		modelFile: "modules/DrMalloyDice/DrMalloyDice_d12.glb",
		system: "DrMalloyDice",
		emissive: "0x009d73"
	});

		dice3d.addDicePreset({
		type: "d10",
		modelFile: "modules/DrMalloyDice/DrMalloyDice_d10.glb",
		system: "DrMalloyDice",
		emissive: "0x009d73"
	});
		dice3d.addDicePreset({
		type: "d100",
		modelFile: "modules/DrMalloyDice/DrMalloyDice_d100.glb",
		system: "DrMalloyDice",
		emissive: "0x009d73"
	});
		dice3d.addDicePreset({
		type: "d5",
		modelFile: "modules/DrMalloyDice/DrMalloyDice_d5.glb",
		system: "DrMalloyDice",
		emissive: "0x009d73"
	});
		dice3d.addDicePreset({
		type: "d20",
		modelFile: "modules/DrMalloyDice/DrMalloyDice_d20.glb",
		system: "DrMalloyDice",
		emissive: "0x009d73"
	});

});
