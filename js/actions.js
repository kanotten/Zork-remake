function handleCommand(command) {
    let output = ``;

    switch (command) {
        case "look":
        case "l":
            if (rooms[currentRoom].shortDescription) {
                output = rooms[currentRoom].shortDescription;
            } else {
                output = rooms[currentRoom].description;
            }
            break;

        case "bag":
        case "inventory":
        case "inv":
        case "i":
            if (inventory.length == 0) {
                output = "You have nothing in your inventory.";
            } else {
                output = "You have the following items in your inventory: ";
                for (var i = 0; i < inventory.length; i++) {
                    output += `<div>${[i + 1]}. ${inventory[i]}</div>\n`;
                }
            }
            break;

        case "go north":
        case "go n":
        case "n":
        case "north":
            if (rooms[currentRoom].exits.north) {
                var nextRoom = rooms[currentRoom].exits.north;
                if (
                    rooms[nextRoom].dark == false ||
                    inventory.includes("Lantern")
                ) {
                    currentRoom = nextRoom;
                    output = rooms[currentRoom].description;
                } else {
                    output = "The room is too dark to move.";
                }
            } else {
                output = "You can't go that way.";
            }
            break;

        case "go south":
        case "go s":
        case "s":
        case "south":
            if (rooms[currentRoom].exits.south) {
                var nextRoom = rooms[currentRoom].exits.south;
                if (
                    rooms[nextRoom].dark == false ||
                    inventory.includes("Lantern")
                ) {
                    currentRoom = nextRoom;
                    output = rooms[currentRoom].description;
                } else {
                    output = "The room is too dark to move.";
                }
            } else {
                output = "You can't go that way.";
            }
            break;

        case "go east":
        case "go e":
        case "e":
        case "east":
            if (rooms[currentRoom].exits.east) {
                var nextRoom = rooms[currentRoom].exits.east;
                if (
                    rooms[nextRoom].dark == false ||
                    inventory.includes("Lantern")
                ) {
                    currentRoom = nextRoom;
                    output = rooms[currentRoom].description;
                } else {
                    output = "The room is too dark to move.";
                }
            } else {
                output = "You can't go that way.";
            }
            break;

        case "go west":
        case "go w":
        case "w":
        case "west":
            if (rooms[currentRoom].exits.west) {
                var nextRoom = rooms[currentRoom].exits.west;
                if (
                    rooms[nextRoom].dark == false ||
                    inventory.includes("Lantern")
                ) {
                    currentRoom = rooms[currentRoom].exits.west;
                    output = rooms[currentRoom].description;
                } else {
                    output = "The room is too dark to move.";
                }
            } else {
                output = "You can't go that way.";
            }
            break;

        case "go northwest":
        case "go nw":
        case "nw":
        case "northwest":
            if (rooms[currentRoom].exits.northWest) {
                var nextRoom = rooms[currentRoom].exits.northWest;
                if (
                    rooms[nextRoom].dark == false ||
                    inventory.includes("Lantern")
                ) {
                    currentRoom = nextRoom;
                    output = rooms[currentRoom].description;
                } else {
                    output = "The room is too dark to move.";
                }
            } else {
                output = "You can't go that way.";
            }
            break;

        case "go northeast":
        case "go ne":
        case "ne":
        case "northeast":
            if (rooms[currentRoom].exits.northEast) {
                var nextRoom = rooms[currentRoom].exits.northEast;
                if (
                    rooms[nextRoom].dark == false ||
                    inventory.includes("Lantern")
                ) {
                    currentRoom = nextRoom;
                    output = rooms[currentRoom].description;
                } else {
                    output = "The room is too dark to move.";
                }
            } else {
                output = "You can't go that way.";
            }
            break;

        case "go southwest":
        case "go sw":
        case "sw":
        case "southwest":
            if (rooms[currentRoom].exits.southWest) {
                var nextRoom = rooms[currentRoom].exits.southWest;
                if (
                    rooms[nextRoom].dark == false ||
                    inventory.includes("Lantern")
                ) {
                    currentRoom = nextRoom;
                    output = rooms[currentRoom].description;
                } else {
                    output = "The room is too dark to move.";
                }
            } else {
                output = "You can't go that way.";
            }
            break;

        case "go southeast":
        case "go se":
        case "se":
        case "southeast":
            if (rooms[currentRoom].exits.southEast) {
                var nextRoom = rooms[currentRoom].exits.southEast;
                if (
                    rooms[nextRoom].dark == false ||
                    inventory.includes("Lantern")
                ) {
                    currentRoom = nextRoom;
                    output = rooms[currentRoom].description;
                } else {
                    output = "The room is too dark to move.";
                }
            } else {
                output = "You can't go that way.";
            }
            break;

        case "go up":
        case "up":
            if (rooms[currentRoom].exits.up) {
                var nextRoom = rooms[currentRoom].exits.up;
                if (
                    rooms[nextRoom].dark == false ||
                    inventory.includes("Lantern")
                ) {
                    currentRoom = nextRoom;
                    output = rooms[currentRoom].description;
                } else {
                    output = "It's far too dark up there.";
                }
            } else {
                output = "There's nowhere to go up.";
            }
            break;

        case "go down":
        case "down":
            if (rooms[currentRoom].exits.down) {
                var nextRoom = rooms[currentRoom].exits.down;
                if (
                    rooms[nextRoom].dark == false ||
                    inventory.includes("Lantern")
                ) {
                    currentRoom = nextRoom;
                    output = rooms[currentRoom].description;
                } else {
                    output = "It's far too dark down there.";
                }
            } else {
                output = "There's nowhere to go down.";
            }
            break;

        case "pickup":
            output = "What do you want to pickup?";
            break;

        case "take":
            output = "What do you want to take?";
            break;

        case "take item":
        case "take items":
            output = "What item you want to take?";
            break;

        case "take lantern":
        case "pickup lantern":
        case "pick up lantern":
        case "lantern":
            if (rooms[currentRoom].items.includes("Lantern")) {
                inventory.push("Lantern");
                output = "You have added lantern to your inventory.";
            } else {
                output = "There is no lantern here.";
            }
            break;

        case "take sword":
        case "pickup sword":
        case "pick up sword":
            if (rooms[currentRoom].items.includes("Wooden Sword")) {
                inventory.push("Wooden Sword");
                output =
                    "You picked up the wooden sword and added it to your inventory.";
            } else {
                output = "There is no sword here.";
            }
            break;

        case "rock":
        case "take rock":
        case "pick up rock":
        case "pickup rock":
            if (rooms[currentRoom].items.includes("Rock")) {
                inventory.push("Rock");
                output = "You have added Dwayne to your inventory.";
            } else {
                output = "There is no rock here.";
            }
            break;

        case "yay":
            output = "Yippieeeeeee!";
            break;

        case "vilde":
            output = "Fineste <3";
            break;

        case "reset":
        case "restart":
        case "reload":
            output = "Restarting game... Please hold...";
            function restart() {
                location.reload();
            }
            setTimeout(restart, 666);
            break;

        case "help":
            output = `<br>This is a remake of the text-based game Zork.<br>You have to type in different commands to control where you go and what you do. <br><br>Here are some basic movement commands:<br><br>- go *direction* (You can go north, east, south, west, up or down)<br>- take *item* (You can pick up several different items on your journey. You must define what item specifically you want to pick up.)<br>- look (Get your bearings in the room you are currently in.)<br>- yay (Celebrate!)<br>- reset / restart (reset and restart the game)`;
            break;

        default:
            output = "I don't know what " + command + " means.";
    }

    outputEl.innerHTML += `<div class="prompt"></div><div>${command}</div><div>${output}</div>`;
}
