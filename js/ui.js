﻿﻿﻿﻿﻿﻿﻿﻿function UpdateUI() {
	let ClicCashText = fix(p.Weapon.Power * (GetWeaponMult(p.Weapon.Id) + ((p.prestige.bonus + p.prestige.multipliers[1]) * 0.1) - 0.1), "full");
	let WeaponsNBR = 0;
	let AllWeaponsNBR = -1;
	for (var i in weapons) { AllWeaponsNBR += 1; WeaponsNBR += p.WeaponBought[i]; }
	let PrestigePoints = p.rank < 400 ? 0 : Math.trunc(p.rank / 200);
	let prestigeText = p.prestige.price[0] <= p.rank && p.prestige.price[1] <= p.cash ? texts.infos[0] : "";
	//LEFT INFOS
	$('#imagecash').attr('style', "background-image:url('" + weapons[p.Weapon.Id].img + "');");
	//$("#status_cps").html(""); unused for now
	$("#status_cash").html("R " + fix(p.cash, "full") + "<div class='sub header'>+ " + fix(getCashPS(), "full") + " per second</div>");
	$("#status_level").html(getRank(p.rank));
	$("#status_weapon").html(weapons[p.Weapon.Id].name + " " + GenStarLabel(p.Stars[p.Weapon.Id]));
	$("#status_weapon").attr("class", 'col-span-3 font-bold flex items-center justify-end gap-2 ' + p.Weapon.Class);
	$("#status_damage").attr("class", 'col-span-3 font-bold flex items-center justify-end gap-2 ' + p.Weapon.Class);
	$("#status_damage").html("<i class='text-error fa-thin fa-crosshairs-simple'></i> " + ClicCashText);
	$("#status_points").html("<span class='jaune'><i class='fa-light fa-coin'></i> " + fix(p.points, 2) + "</span>");
	$("#messages").html(prestigeText);
	//CHARACTER
	$("#prestigecount").html(p.prestige.level);
	$("#prestigepricecount").html(getRank(p.prestige.price[0]));
	$("#prestigepricecount2").html("R " + fix(p.prestige.price[1], "full"));
	$("#character-text4").html(texts.character[5] + "<span class='jaune'> " + PrestigePoints + " </span> " + texts.character[6]);
	$("#character-text5").html(texts.character[7] + "<span class='jaune'> " + fix(p.prestige.bonus, 9) + "</span> " + texts.character[8]);
	//GENERAL STATS
	$("#ObjectivesCompleted").html(p.stats.completedquests + " Objectives completed.");
	$("#totalclicks").html("Clicked " + fix(p.stats.totalclicks, 3) + " times.");
	$("#highestrank").html("Highest rank achieved: " + getRank(p.stats.highestrank));
	$("#totalsuccess").html("Total successes unlocked: <font class='jaune'>" + SuccessCount() + "</font>/" + success.length);
	// CHARACTER STATS
	$("#spcount").html("Character number <font class='jaune'>" + p.prestige.level + "</font>");
	$("#pointsspent").html("<font class='jaune'><i class='fa-light fa-coin'></i>" + fix(p.stats.spentpoints, 2) + "</font> points spent");
	$("#boughtvehicles1").html("Strength (damage) multiplier <font class='bold jaune'>" + p.prestige.multipliers[0] + "</font>/1000");
	$("#boughtvehicles2").html("Stamina (cash) multiplier <font class='bold jaune'>" + p.prestige.multipliers[1] + "</font>/1000");
	$("#boughtvehicles3").html("Stealth (rewards) multiplier <font class='bold jaune'>" + p.prestige.multipliers[2] + "</font>/1000");
	//WEAPONS STATS
	$("#lowestweaponrank").html("Lowest weapon rank: " + GenStarLabel(_.min(p.Stars.slice(1))));
	$("#highestweaponrank").html("Highest weapon rank: " + GenStarLabel(_.max(p.Stars.slice(1))));
	$("#weapons-bought").html("Current weapons acquired: " + WeaponsNBR + "/" + AllWeaponsNBR);
	$("#totalweaponsbought").html("Total weapons bought: <font class='jaune'>" + p.stats.totalweaponsbought + "</font>");
	$("#totalweaponrerolled").html("Total weapon rerolled: <font class='jaune'>" + p.stats.totalweaponrerolled + "</font>");
	//CASH STATS
	$("#cashcount").html("<span class='desc jaune'>R " + fix(p.cash, "full") + "</span> " + texts.stats[6]);
	$("#cashpscount").html("<span class='desc jaune'>R " + fix(getCashPS(), "full") + "</span> " + texts.stats[7]);
	$("#addcashcount").html("<span class='desc jaune'>R " + ClicCashText + "</span> " + texts.stats[8]);
	$("#character_totalspentcash").html("<span class='desc tc-spent-dollar'>R " + fix(p.stats.character_totalspentcash, "full") + "</span> spent with character");
	$("#character_totalcash").html("<span class='desc jaune'>R " + fix(p.stats.character_totalcash, "full") + "</span> earned with character");
	$("#totalspentcash").html("<span class='desc tc-spent-dollar'>R " + fix(p.stats.totalspentcash, "full") + "</span> spent in total");
	$("#totalcash").html("<span class='desc jaune'>R " + fix(p.stats.totalcash, "full") + "</span> earned in total");
	//MULTIPLIERS STATS
	$("#prestigemult").html("Prestige multiplier at <font class='jaune bold'>" + fix(p.prestige.bonus, 9) + "</font>");
	$("#cashmult").html("Cash (stamina) multiplier at <font class='jaune bold'>" + fix((p.prestige.bonus + (p.prestige.multipliers[0] * 0.1)), 9) + "</font>");
	$("#damagemult").html("Damage (strength) multiplier at <font class='jaune bold'>" + fix((p.prestige.bonus + (p.prestige.multipliers[1] * 0.1)), 9) + "</font>");
	$("#stealthmult").html("Objective Rewards (stealth) multiplier at <font class='jaune bold'>" + fix(p.prestige.bonus + p.prestige.multipliers[2] * 0.1, 9) + "</font>");
	//OTHERS STATS

	$("#time").html(texts.stats[10] + " " + p.DateStarted + "<br />" + texts.stats[11] + " <font class='jaune'>" + toHHMMSS(p.stats.totalplaytime) + "</font>");
	//OBJECTIVES
	$("#objective").html(GetQuestTitle());
	$("#quest_rewards").html("<i class='fa-light fa-coin'></i> " + fix(p.quest.reward + p.quest.reward * (p.prestige.multipliers[2] * 0.1), "dynamic"));

	if (p.points >= 0.5) $("#ChangeObjective").attr("class", "btn btn-warning btn-outline w-full mt-2");
	else $("#ChangeObjective").attr("class", "btn btn-error btn-outline w-full mt-2");

	$("#successcount").html("<font class='SuccessText'>" + SuccessCount() + "</font>/" + success.length + " " + texts.success[0]);
	SuccessList();
}

function UpdateTabs() {
	if ($('#tab1').is(":visible")) UpdateWeapons();
	if ($('#tab2').is(":visible")) UpdateMissions();
	if ($('#tab3').is(":visible")) VehicleList();
}

function UpdateTexts() {
	//MENU
	$("#t0").html("<i class='fa-solid fa-bars'></i> " + texts.menu[0]);
	$("#t1").html("<i class='fa-thin fa-crosshairs-simple'></i> " + texts.menu[1]);
	$("#t2").html("<i class='fa-solid fa-dollar-sign'></i> " + texts.menu[2]);
	$("#t3").html("<i class='fa-solid fa-user'></i> " + texts.menu[3]);
	$("#t4").html("<i class='fa-solid fa-chart-bar'></i> " + texts.menu[4]);
	//PRESTIGE TEXTS
	$("#character-number").html(texts.character[1]);
	$("#character-text1").html(texts.character[2]);
	$("#character-text2").html(texts.character[3]);
	$("#character-text3").html(texts.character[4]);
	$("#btnPrestige").val(texts.character[0]);
	//WEAPONS TYPES BUTTONS
	for (var weapon = 1; weapon < 9; weapon++) { $("#W" + weapon).html(texts.weapontype[weapon] + " (" + p.WeaponType[weapon] + "/" + countWeaponsByType()[weapon] + ")"); }
	//SUCCESS
	$("#S0").html(texts.success[1]);
	$("#S1").html(texts.success[2]);
	$("#S2").html(texts.success[3]);
	$("#S3").html(texts.success[4]);
	$("#CloseSuccess").html(texts.success[5]);
	//SAVE & STATS
	$("#options-title").html(texts.stats[13]);
	$("#btnBackgrounds").val(texts.stats[14]);
	$("#savemenu").html(texts.stats[0]);
	$("#btnExport").val(texts.stats[2]);
	$("#btnImport").val(texts.stats[3]);
	$("#Recommencer").val(texts.stats[4]);
	$("#CloseStats").html(texts.stats[5]);
	$("#statistics").html(texts.stats[1]);
	$("#version").html(texts.stats[12] + " " + version);
	document.title = "Mzansi Crime Idle " + version;
}

//MISSIONS TABLE
function MissionList() {
	$('#missions').html("");
	for (var i in missions) {
		let CONTENT = $(`
			<div class="card bg-base-200 shadow-xl" id="mission-${i}">
				<div class="card-body p-4">
					<h3 class="card-title text-base">${missions[i].name}</h3>
					<div class="text-xs text-base-content/70">
						Level <span id="mission-${i}-level">0</span>
						<span class="float-right">Next x2: <span id="mission-${i}-next" class="text-warning">25</span></span>
					</div>
					<div class="flex justify-between mt-2">
						<div class="badge badge-neutral" id="mission-${i}-production">R0/s</div>
						<div class="badge badge-neutral" id="mission-${i}-value">Cost: R0</div>
					</div>
					<div class="card-actions justify-center mt-4 flex-col gap-2">
						<div class="join w-full">
							<button id="mission-${i}-btnB1" class="btn btn-sm btn-warning join-item flex-1" onClick="BuyM(${i}, 1);">+1</button>
							<button id="mission-${i}-btnB10" class="btn btn-sm btn-warning join-item flex-1" onClick="BuyM(${i}, 10);">+10</button>
							<button id="mission-${i}-btnB100" class="btn btn-sm btn-warning join-item flex-1" onClick="BuyM(${i}, 100);">+100</button>
						</div>
						<div class="join w-full">
							<button id="mission-${i}-btnS1" class="btn btn-sm btn-error btn-outline join-item flex-1" onClick="SellM(${i}, 1);">-1</button>
							<button id="mission-${i}-btnS10" class="btn btn-sm btn-error btn-outline join-item flex-1" onClick="SellM(${i}, 10);">-10</button>
							<button id="mission-${i}-btnS100" class="btn btn-sm btn-error btn-outline join-item flex-1" onClick="SellM(${i}, 100);">-100</button>
						</div>
					</div>
				</div>
			</div>`);
		$('#missions').append(CONTENT);
		if (p.rank >= missions[i].level) $("#mission-" + i).show(); else $("#mission-" + i).hide();
	}
	$("#tab2").append(`<div id='NextMissionUnlock' class='alert alert-warning mt-4'>Next mission unlocks at rank 0</div>`);
	if (getLatestUnlockedMissionId("latest") === "allUnlocked") $("#NextMissionUnlock").hide(); else $("#NextMissionUnlock").show();
}

function UpdateMissions(onlyId) {
	if (onlyId !== undefined) { var i = onlyId; UpdateMissionsDiv(i); return; }
	for (var i in missions) {
		UpdateMissionsDiv(i);
	}
}

function UpdateMissionsDiv(i) {
	// $("#mission-" + i).attr("class", p.missions[i] < 1 ? '' : 'item-active'); // Card style handles this differently
	$("#mission-" + i + "-level").html(p.missions[i]);
	$("#mission-" + i + "-next").html(getNextMilestone(p.missions[i]));
	$("#mission-" + i + "-value").html("Cost: R " + fix(GetMissionPrice(i, 1), 1));
	
	let prodVal = (missions[i].value * p.missions[i]) * (p.prestige.bonus + (p.prestige.multipliers[0] * 0.1));
	$("#mission-" + i + "-production").html("R " + fix(prodVal, 1) + "/s");

	$("#mission-" + i + "-btnB1").prop("disabled", GetMissionPrice(i, 1) > p.cash);
	$("#mission-" + i + "-btnB10").prop("disabled", GetMissionPrice(i, 10) > p.cash);
	$("#mission-" + i + "-btnB100").prop("disabled", GetMissionPrice(i, 100) > p.cash);
	$("#mission-" + i + "-btnS1").prop("disabled", p.missions[i] < 1);
	$("#mission-" + i + "-btnS10").prop("disabled", p.missions[i] < 10);
	$("#mission-" + i + "-btnS100").prop("disabled", p.missions[i] < 100);
	if (getLatestUnlockedMissionId("latest") === "allUnlocked") {
		$("#NextMissionUnlock").hide();
	}
	else {
		$("#NextMissionUnlock").html(`Next mission unlocks at rank ${missions[getLatestUnlockedMissionId("next")].level}`);
		$("#NextMissionUnlock").show();
	}
	if (p.rank >= missions[i].level) $("#mission-" + i).show();
}

//WEAPONS TABLE
function WeaponList() {
	for (var id = 1; id < 9; id++) {
		$('#Wtab' + id).html("");
	}

	for (var i in weapons) {
		let CONTENT = $(`
            <div class="card bg-base-200 shadow-xl" id="weapon-${i}">
                <figure class="px-4 pt-4">
                    <img src="${weapons[i].img}" class="rounded-xl h-32 object-contain bg-base-300 w-full" style="background: #333;">
                </figure>
                <div class="card-body p-4 items-center text-center">
                    <h3 class="card-title text-sm" id="weapon-${i}-name">${weapons[i].name}</h3>
                    <p class="text-xs" id="weapon-${i}-price">R ${weapons[i].price}</p>
                    <div class="card-actions w-full mt-2 flex-col gap-2">
                        <button id="weapon-${i}-purchase" class="btn btn-sm btn-warning w-full" onClick="buyG(${i});">Purchase</button>
                        <button id="weapon-${i}-equip" class="btn btn-sm btn-neutral w-full" onClick="useW(${i});">Equip</button>
                    </div>
                </div>
            </div>
        `);
		$('#Wtab' + weapons[i].type).append(CONTENT);
	}
}

function UpdateWeapons() {
	for (var i in weapons) {
		let COST = p.WeaponBought[i] < 1 ? fix(weapons[i].price, 1) : fix(weapons[i].price * 1.25, 1);
		let PURCHASED_TEXT = p.WeaponBought[i] > 0 ? "" : `<i class="fa-solid fa-lock-keyhole"></i> `;
		
		$("#weapon-" + i + "-name").html(`${PURCHASED_TEXT}${GenStarLabel(p.Stars[i])} <span class="${getQuality(p.Stars[i])}">${weapons[i].name}</span>`);
		
		let powerVal = fix(weapons[i].power * (GetWeaponMult(i) + ((p.prestige.bonus + p.prestige.multipliers[1]) * 0.1) - 0.1), 1);
		$("#weapon-" + i + "-price").html(`R ${COST} <br><small style="color: #db2828;"><i class="fa-thin fa-crosshairs-simple"></i> ${powerVal}</small>`);
		
		let canBuy = p.cash >= (p.WeaponBought[i] < 1 ? weapons[i].price : weapons[i].price * 1.25);
		let purchaseBtnClass = canBuy ? "btn btn-sm btn-warning w-full" : "btn btn-sm btn-error btn-outline w-full btn-disabled";
		if (p.Stars[i] === 10 && p.WeaponBought[i] > 0) purchaseBtnClass = "btn btn-sm btn-warning btn-outline w-full btn-disabled";
		let purchaseText = p.WeaponBought[i] > 0 ? "Roll" : "Buy";
		if (p.Stars[i] === 10 && p.WeaponBought[i] > 0) purchaseText = "Maxed";
		$("#weapon-" + i + "-purchase").attr("class", purchaseBtnClass).html(purchaseText);
		
		let equipBtnClass = p.WeaponBought[i] > 0 ? "btn btn-sm btn-neutral w-full" : "btn btn-sm btn-neutral w-full btn-disabled";
		let equipText = "Equip";
		if (p.Weapon.Id == i) {
			equipBtnClass = "btn btn-sm btn-success w-full btn-disabled";
			equipText = "Equipped";
		}
		$("#weapon-" + i + "-equip").attr("class", equipBtnClass).html(equipText);
		
		if (p.WeaponBought[i] < 1) $("#weapon-" + i).css("opacity", "0.7");
		else $("#weapon-" + i).css("opacity", "1");
	}
}

//CHARACTER SKILLS TABLE
function VehicleList() {
	let content = "<thead><tr><th class='text-center'>Skill</th><th class='text-center'>Level</th><th class='text-center'>Price</th><th class='text-center'>Bonus</th><th class='text-center'>Action</th></tr></thead><tbody>";
	
	for (var i in vehicules) {
		let vehicle = vehicules[i];
		let PRICE = GetMultPrice(i);
		let canBuy = PRICE > p.points ? ' btn-error btn-outline' : ' btn-warning';
		let BUTTON = "<button class='btn btn-sm w-full" + canBuy + "' onClick='buyV(" + i + ");'>Upgrade</button>";
		let type = "";
		let level = 0;
		let name = "<font class='text type2'>";
		let multiplier = "<font class='jaune'>" + fix((p.prestige.bonus + (p.prestige.multipliers[i] * vehicle.value)), 9) + "</font>";
		let color = vehicle.price > p.points ? ' rouge bold' : ' jaune bold';
		let cost = "<font class='" + color + "'><i class='fa-light fa-coin'></i> " + fix(PRICE, "dynamic") + "</font>";
		if (vehicle.type == 0) { type = " cash (+10% per level)"; }
		if (vehicle.type == 1) { type = " damage (+10% per level)"; }
		if (vehicle.type == 2) { type = " objective reward (+10% per level)"; }

		if (p.prestige.multipliers[i] > 0) level = fix(p.prestige.multipliers[i], 0);

		if (p.prestige.multipliers[i] >= 1000) BUTTON = "<button class='btn btn-sm w-full btn-disabled'>Maxed</button>";

		content += (
			"<tr>" +
			"<td class='text-center'>" + name + vehicle.name + "</font></td>" +
			"<td class='text-center'>" + level + "</font></td>" +
			"<td class='text-center'>" + cost + "</td>" +
			"<td class='text-center'>" + multiplier + "</font> " + type + "</td>" +
			"<td class='center aligned'>" + BUTTON + "</td>" +
			"</tr>"
		);
	}
	content += "</tbody>";
	$('#Vtab').html(content);
}

//UI FUNCTIONS

function btnPrestigeD() { $("#btnPrestige").addClass("btn-disabled"); }
function btnPrestigeE() { $("#btnPrestige").removeClass("btn-disabled"); }
function hideTabs() { for (var id = 1; id < 6; id++) { $("#tab" + id).hide(); $("#t" + id).removeClass("btn-active text-warning"); } }
function hideMenus() { for (var id = 1; id < 6; id++) { document.getElementById('modal-' + id).close(); } }
function hideWTabs() { for (var id = 0; id < 10; id++) { $('#Wtab' + id).hide(); $("#W" + id).removeClass('tab-active'); } }
function hideSTabs() { for (var id = 0; id < 10; id++) { $('#Stab' + id).hide(); $("#succcess-btn-" + id).removeClass('tab-active'); } }

function ClickEvents() {
	$("#game-menu").on("click", "a", function () {
		var id = $(this).data('id'); hideTabs();
		$("#tab" + id).show();
		$("#t" + id).addClass("btn-active text-warning");
		UpdateUI();
		UpdateTabs();
	});
	$("#sidebar").on("click", "a", function () {
		var id = $(this).data('id');
		document.getElementById('modal-' + id).showModal();
		UpdateUI();
	});
	$("#mobile-bottom-nav").on("click", "button", function () {
		var id = $(this).data('id');
		if (id == 0) {
			$("#sidebar").toggleClass("hidden flex");
		} else {
			hideTabs();
			$("#tab" + id).show();
			$("#mobile-bottom-nav button").removeClass("active text-success bg-base-300").addClass("text-neutral-content");
			$(this).removeClass("text-neutral-content").addClass("active text-success bg-base-300");
			$("#t" + id).addClass("btn-active text-warning");
			UpdateUI();
			UpdateTabs();
		}
	});
	$("#weap-select").on("click", "a", function () {
		var id = $(this).data('id');
		hideWTabs();
		$('#Wtab' + id).show();
		$("#W" + id).addClass("tab-active");
	});
	$("#ChangeObjective").on("click", function () {
		if (p.points >= 0.5) {
			p.points -= 0.5;
			NewObjective();
		}
	});
	$("#top-menu").on("click", "#t0", function () {
		$("#sidebar").toggleClass("hidden flex");
	});
	$("#successtype").on("click", "button", function () {
		var id = $(this).data('id');
		hideSTabs();
		$('#Stab' + id).show();
		$("#succcess-btn-" + id).addClass("tab-active");
	});
	$("#closeMSG").on("click", function () {
		hideMenus();
	});
	$("#imagecontainer").on("click", function () { ClickWeapon(); });
}

//SUCCESS MENU

function SuccessCount() {
	var succeslevel = 0;

	for (var i in success) {
		var succes = success[i];
		if (p.succes[i] > 0) { succeslevel++; }

		if (succes.type == 0) { if (p.tutorial == 6) { p.succes[0] = 1; } }
		if (succes.type == 1) { if (p.cash >= succes.value) { p.succes[i] = 1; } }
		if (succes.type == 2) { if (p.missions[succes.value2] >= 100) { p.succes[i] = 1; } else { p.succes[i] = 0; } }
		if (succes.type == 4) { if (p.rank >= succes.value) { p.succes[i] = 1; } }
		if (succes.type == 5) { if (p.prestige.level >= succes.value) { p.succes[i] = 1; } else { p.succes[i] = 0; } }
	}
	return succeslevel;
}

function SuccessList() {
	for (var id = 0; id < 4; id++) { $('#Stab' + id).html(""); }

	for (var i in success) {
		var succes = success[i];
		var unlocked = p.succes[i] > 0 ? "<i class='fa-solid fa-check text-success'></i>" : "<i class='fa-solid fa-times text-error'></i>";

		var succesDIV = $(
			"<div class='alert shadow-lg mb-2'>" +
			unlocked +
			"<div class='content'><p class='text type2'>" + succes.name + "</p>" +
			"<p>" + succes.desc + "</p></div></div>"
		);
		if (succes.type === 0) { $('#Stab0').append(succesDIV); } // Tutorial
		if (succes.type === 1) { $('#Stab1').append(succesDIV); } // Cash
		if (succes.type === 2) { $('#Stab2').append(succesDIV); } // Missions
		//if (succes.type === 3) { $('#Stab2').append(succesDIV); } Unused
		if (succes.type === 4) { $('#Stab0').append(succesDIV); } // Ranks
		if (succes.type === 5) { $('#Stab3').append(succesDIV); } // Prestige
	}
}

//TUTORIAL FUNCTIONS

function showTutorial(id) {
	p.tutorial = id;
	$("#tutorial-title").html("Guide - " + tutorialtexts[id].title);
	$("#tutorial-text").html(tutorialtexts[id].text);
	if (p.tutorial == 0) { $("#tuto-prev").addClass("btn-disabled"); } else {
		$("#tuto-prev").removeClass("btn-disabled");
	}
	if (p.tutorial == 6) { $("#tuto-next").addClass("btn-disabled"); } else {
		$("#tuto-next").removeClass("btn-disabled");
	}
}

function closeTutorial() {
	hideMenus();
	p.tutorial = 0;
}

function NextTuto() {
	if (p.tutorial < 6) { p.tutorial++; showTutorial(p.tutorial); }
}

function PrevTuto() {
	if (p.tutorial >= 1) { p.tutorial--; showTutorial(p.tutorial); }
}

function showTutorialDIV() {
	p.fl = 0;
	document.getElementById('modal-4').showModal();
	showTutorial(0);
}

function MESSAGE(title, message) {
	$("#message-title").html(title);
	$("#message-text").html(message);
	document.getElementById('modal-1').showModal();
}

function GetMultPrice(id) {
	if (p.prestige.multipliers[id] == null) p.prestige.multipliers[id] = 0;
	var price = 1;
	if (p.prestige.multipliers[id] >= 10) price = 1.25;
	if (p.prestige.multipliers[id] >= 20) price = 1.5;
	if (p.prestige.multipliers[id] >= 30) price = 2;
	if (p.prestige.multipliers[id] >= 40) price = 2.5;
	if (p.prestige.multipliers[id] >= 50) price = 4;
	if (p.prestige.multipliers[id] >= 60) price = 5;
	if (p.prestige.multipliers[id] >= 70) price = 5.5;
	if (p.prestige.multipliers[id] >= 80) price = 6;
	if (p.prestige.multipliers[id] >= 90) price = 6.5;
	if (p.prestige.multipliers[id] >= 100) price = 7;
	if (p.prestige.multipliers[id] >= 200) price = 8;
	if (p.prestige.multipliers[id] >= 300) price = 9;
	if (p.prestige.multipliers[id] >= 400) price = 10;
	if (p.prestige.multipliers[id] >= 500) price = 11;
	if (p.prestige.multipliers[id] >= 600) price = 12;
	if (p.prestige.multipliers[id] >= 700) price = 13;
	if (p.prestige.multipliers[id] >= 800) price = 14;
	if (p.prestige.multipliers[id] >= 900) price = 15;
	if (id == 0 && p.prestige.multipliers[id] >= 1000) price = 999999999;
	if (id == 1 && p.prestige.multipliers[id] >= 1000) price = 999999999;
	if (id == 2 && p.prestige.multipliers[id] >= 1000) price = 999999999
	return price;
}

function getLatestUnlockedMissionId(type) {
	if (type === undefined) type = "latest";
	let latestId = -1;
	let nextId = -1;

	for (let i in missions) {
		let id = parseInt(i);
		if (p.rank >= missions[id].level) {
			latestId = id;
		} else {
			nextId = id;
			break; // stop at the first mission not unlocked
		}
	}

	const maxId = Math.max(...Object.keys(missions).map(Number));

	if (type === "latest") {
		if (latestId === maxId) {
			return "allUnlocked";
		}
		return latestId;
	} else if (type === "next") {
		if (latestId === maxId) {
			return "none"; // or "allUnlocked" if you prefer
		}
		return nextId;
	}
}

function countWeaponsByType() {
	const typeCounts = {};

	for (const weapon of Object.values(weapons)) {
		if (!typeCounts[weapon.type]) {
			typeCounts[weapon.type] = 0;
		}
		typeCounts[weapon.type]++;
	}

	return typeCounts;
}