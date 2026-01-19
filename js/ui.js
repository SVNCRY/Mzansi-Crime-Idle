﻿﻿﻿﻿let activeRegion = null;
let lastBackgroundId = -1;

function openRegion(id) {
	activeRegion = parseInt(id);
	MissionList();
	UpdateMissions();
}

function closeRegion() {
	activeRegion = null;
	MissionList();
}

function UpdateUI() {
	const ClicCashText = fix(p.Weapon.Power * (GetWeaponMult(p.Weapon.Id) + ((p.prestige.bonus + p.prestige.multipliers[1]) * 0.1) - 0.1), "full");
	let WeaponsNBR = 0;
	let AllWeaponsNBR = -1;
	for (const i in weapons) { AllWeaponsNBR += 1; WeaponsNBR += p.WeaponBought[i]; }
	const PrestigePoints = p.rank < 400 ? 0 : Math.trunc(p.rank / 200);
	const prestigeText = p.prestige.price[0] <= p.rank && p.prestige.price[1] <= p.cash ? texts.infos[0] : "";
	//LEFT INFOS
	document.getElementById('imagecash').style.backgroundImage = "url('" + weapons[p.Weapon.Id].img + "')";
	//document.getElementById("status_cps").innerHTML = ""; unused for now
	document.getElementById("status_cash").innerHTML = "R " + fix(p.cash, "full") + "<div class='sub header'>+ " + fix(getCashPS(), "full") + " per second</div>";
	document.getElementById("status_level").innerHTML = getRank(p.rank);
	document.getElementById("status_weapon").innerHTML = weapons[p.Weapon.Id].name + " " + GenStarLabel(p.Stars[p.Weapon.Id]);
	document.getElementById("status_weapon").className = 'col-span-3 font-bold flex items-center justify-end gap-2 ' + p.Weapon.Class;
	document.getElementById("status_damage").className = 'col-span-3 font-bold flex items-center justify-end gap-2 ' + p.Weapon.Class;
	document.getElementById("status_damage").innerHTML = "<i class='text-error fa-thin fa-crosshairs-simple'></i> " + ClicCashText;
	document.getElementById("status_points").innerHTML = "<span class='jaune'><i class='fa-light fa-coin'></i> " + fix(p.points, 2) + "</span>";
	document.getElementById("messages").innerHTML = prestigeText;
	//CHARACTER
	document.getElementById("prestigecount").innerHTML = p.prestige.level;
	document.getElementById("prestigepricecount").innerHTML = getRank(p.prestige.price[0]);
	document.getElementById("prestigepricecount2").innerHTML = "R " + fix(p.prestige.price[1], "full");
	document.getElementById("character-text4").innerHTML = texts.character[5] + "<span class='jaune'> " + PrestigePoints + " </span> " + texts.character[6];
	document.getElementById("character-text5").innerHTML = texts.character[7] + "<span class='jaune'> " + fix(p.prestige.bonus, 9) + "</span> " + texts.character[8];
	//GENERAL STATS
	document.getElementById("ObjectivesCompleted").innerHTML = p.stats.completedquests + " Objectives completed.";
	document.getElementById("totalclicks").innerHTML = "Clicked " + fix(p.stats.totalclicks, 3) + " times.";
	document.getElementById("highestrank").innerHTML = "Highest rank achieved: " + getRank(p.stats.highestrank);
	document.getElementById("totalsuccess").innerHTML = "Total successes unlocked: <font class='jaune'>" + SuccessCount() + "</font>/" + success.length;
	// CHARACTER STATS
	document.getElementById("spcount").innerHTML = "Character number <font class='jaune'>" + p.prestige.level + "</font>";
	document.getElementById("pointsspent").innerHTML = "<font class='jaune'><i class='fa-light fa-coin'></i>" + fix(p.stats.spentpoints, 2) + "</font> points spent";
	document.getElementById("boughtvehicles1").innerHTML = "Strength (damage) multiplier <font class='bold jaune'>" + p.prestige.multipliers[0] + "</font>/1000";
	document.getElementById("boughtvehicles2").innerHTML = "Stamina (cash) multiplier <font class='bold jaune'>" + p.prestige.multipliers[1] + "</font>/1000";
	document.getElementById("boughtvehicles3").innerHTML = "Stealth (rewards) multiplier <font class='bold jaune'>" + p.prestige.multipliers[2] + "</font>/1000";
	//WEAPONS STATS
	document.getElementById("lowestweaponrank").innerHTML = "Lowest weapon rank: " + GenStarLabel(_.min(p.Stars.slice(1)));
	document.getElementById("highestweaponrank").innerHTML = "Highest weapon rank: " + GenStarLabel(_.max(p.Stars.slice(1)));
	document.getElementById("weapons-bought").innerHTML = "Current weapons acquired: " + WeaponsNBR + "/" + AllWeaponsNBR;
	document.getElementById("totalweaponsbought").innerHTML = "Total weapons bought: <font class='jaune'>" + p.stats.totalweaponsbought + "</font>";
	document.getElementById("totalweaponrerolled").innerHTML = "Total weapon rerolled: <font class='jaune'>" + p.stats.totalweaponrerolled + "</font>";
	//CASH STATS
	document.getElementById("cashcount").innerHTML = "<span class='desc jaune'>R " + fix(p.cash, "full") + "</span> " + texts.stats[6];
	document.getElementById("cashpscount").innerHTML = "<span class='desc jaune'>R " + fix(getCashPS(), "full") + "</span> " + texts.stats[7];
	document.getElementById("addcashcount").innerHTML = "<span class='desc jaune'>R " + ClicCashText + "</span> " + texts.stats[8];
	document.getElementById("character_totalspentcash").innerHTML = "<span class='desc tc-spent-dollar'>R " + fix(p.stats.character_totalspentcash, "full") + "</span> spent with character";
	document.getElementById("character_totalcash").innerHTML = "<span class='desc jaune'>R " + fix(p.stats.character_totalcash, "full") + "</span> earned with character";
	document.getElementById("totalspentcash").innerHTML = "<span class='desc tc-spent-dollar'>R " + fix(p.stats.totalspentcash, "full") + "</span> spent in total";
	document.getElementById("totalcash").innerHTML = "<span class='desc jaune'>R " + fix(p.stats.totalcash, "full") + "</span> earned in total";
	//MULTIPLIERS STATS
	document.getElementById("prestigemult").innerHTML = "Prestige multiplier at <font class='jaune bold'>" + fix(p.prestige.bonus, 9) + "</font>";
	document.getElementById("cashmult").innerHTML = "Cash (stamina) multiplier at <font class='jaune bold'>" + fix((p.prestige.bonus + (p.prestige.multipliers[0] * 0.1)), 9) + "</font>";
	document.getElementById("damagemult").innerHTML = "Damage (strength) multiplier at <font class='jaune bold'>" + fix((p.prestige.bonus + (p.prestige.multipliers[1] * 0.1)), 9) + "</font>";
	document.getElementById("stealthmult").innerHTML = "Objective Rewards (stealth) multiplier at <font class='jaune bold'>" + fix(p.prestige.bonus + p.prestige.multipliers[2] * 0.1, 9) + "</font>";
	//OTHERS STATS

	document.getElementById("time").innerHTML = texts.stats[10] + " " + p.DateStarted + "<br />" + texts.stats[11] + " <font class='jaune'>" + toHHMMSS(p.stats.totalplaytime) + "</font>";
	//OBJECTIVES
	document.getElementById("objective").innerHTML = GetQuestTitle();
	document.getElementById("quest_rewards").innerHTML = "<i class='fa-light fa-coin'></i> " + fix(p.quest.reward + p.quest.reward * (p.prestige.multipliers[2] * 0.1), "dynamic");

	if (p.points >= 0.5) document.getElementById("ChangeObjective").className = "btn btn-warning btn-outline w-full mt-2";
	else document.getElementById("ChangeObjective").className = "btn btn-error btn-outline w-full mt-2";

	document.getElementById("successcount").innerHTML = "<font class='SuccessText'>" + SuccessCount() + "</font>/" + success.length + " " + texts.success[0];
	SuccessList();
	UpdateBackground();
}

function UpdateTabs() {
	if (document.getElementById('tab1').style.display !== 'none') UpdateWeapons();
	if (document.getElementById('tab2').style.display !== 'none') {
		if (activeRegion === null) UpdateMap();
		else UpdateMissions();
	}
	if (document.getElementById('tab3').style.display !== 'none') VehicleList();
}

function UpdateTexts() {
	//MENU
	document.getElementById("t0").innerHTML = "<i class='fa-solid fa-bars'></i> " + texts.menu[0];
	document.getElementById("t1").innerHTML = "<i class='fa-thin fa-crosshairs-simple'></i> " + texts.menu[1];
	document.getElementById("t2").innerHTML = "<i class='fa-solid fa-dollar-sign'></i> " + texts.menu[2];
	document.getElementById("t3").innerHTML = "<i class='fa-solid fa-user'></i> " + texts.menu[3];
	document.getElementById("t4").innerHTML = "<i class='fa-solid fa-chart-bar'></i> " + texts.menu[4];
	//PRESTIGE TEXTS
	document.getElementById("character-number").innerHTML = texts.character[1];
	document.getElementById("character-text1").innerHTML = texts.character[2];
	document.getElementById("character-text2").innerHTML = texts.character[3];
	document.getElementById("character-text3").innerHTML = texts.character[4];
	document.getElementById("btnPrestige").value = texts.character[0];
	//WEAPONS TYPES BUTTONS
	for (let weapon = 1; weapon < 9; weapon++) { document.getElementById("W" + weapon).innerHTML = texts.weapontype[weapon] + " (" + p.WeaponType[weapon] + "/" + countWeaponsByType()[weapon] + ")"; }
	//SUCCESS
	document.getElementById("S0").innerHTML = texts.success[1];
	document.getElementById("S1").innerHTML = texts.success[2];
	document.getElementById("S2").innerHTML = texts.success[3];
	document.getElementById("S3").innerHTML = texts.success[4];
	document.getElementById("CloseSuccess").innerHTML = texts.success[5];
	//SAVE & STATS
	document.getElementById("options-title").innerHTML = texts.stats[13];
	document.getElementById("btnBackgrounds").value = texts.stats[14];
	document.getElementById("savemenu").innerHTML = texts.stats[0];
	document.getElementById("btnExport").value = texts.stats[2];
	document.getElementById("btnImport").value = texts.stats[3];
	document.getElementById("Recommencer").value = texts.stats[4];
	document.getElementById("CloseStats").innerHTML = texts.stats[5];
	document.getElementById("statistics").innerHTML = texts.stats[1];
	document.getElementById("version").innerHTML = texts.stats[12] + " " + version;
	document.title = "Mzansi Crime Idle " + version;
	MissionList();
}

//MISSIONS TABLE
function MissionList() {
	document.getElementById('missions').innerHTML = "";

	if (activeRegion === null) {
		// Render Regions Map (List View)
		for (const id in regions) {
			const r = regions[id];
			const unlocked = isRegionUnlocked(id);
			const progress = getRegionUnlockProgress(id);
			
			let clickAction = unlocked ? `openRegion(${id})` : "";
			let cardClass = unlocked ? "bg-base-200 cursor-pointer hover:bg-base-300" : "bg-base-200 opacity-70";
			let badge = unlocked ? `<div class="badge badge-success">Unlocked</div>` : `<div class="badge badge-warning">Locked</div>`;
			
			let progressBar = "";
			if (!unlocked) {
				 progressBar = `<div class="mt-2" id="region-locked-content-${id}">
									<progress id="region-progress-${id}" class="progress progress-warning w-full" value="${progress}" max="100"></progress>
									<div class="text-xs mt-1">Rank ${p.rank} / ${r.reqRank}</div>
								</div>`;
			}

			const CONTENT = `
			<div class="card ${cardClass} shadow-xl mb-4" onclick="${clickAction}" id="region-card-${id}">
				<div class="card-body p-4">
					<h2 class="card-title text-lg">${r.name} ${badge}</h2>
					<p class="text-sm">${r.subtitle}</p>
					<p class="text-xs italic opacity-70">${r.focus}</p>
					${progressBar}
				</div>
			</div>`;
			document.getElementById('missions').insertAdjacentHTML('beforeend', CONTENT);
		}
		
		const nextRegion = getNextRegionToUnlock();
		const msg = nextRegion ? `Next region: ${nextRegion.name} at Rank ${nextRegion.reqRank}` : "All regions unlocked!";
		document.getElementById("tab2").insertAdjacentHTML('beforeend', `<div id='NextUnlockInfo' class='alert alert-info mt-4'>${msg}</div>`);

	} else {
		// Render Missions for Active Region
		const regionName = regions[activeRegion].name;
		document.getElementById('missions').insertAdjacentHTML('beforeend', `
			<div class="flex justify-between items-center mb-4">
				<h2 class="text-xl font-bold">${regionName}</h2>
				<button class="btn btn-sm btn-neutral" onclick="closeRegion()">Back to Map</button>
			</div>
		`);

		for (const i in missions) {
			if (missions[i].regionId !== activeRegion) continue;

			const CONTENT = `
				<div class="card bg-base-200 shadow-xl mb-2" id="mission-${i}">
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
				</div>`;
			document.getElementById('missions').insertAdjacentHTML('beforeend', CONTENT);
			if (p.rank >= missions[i].level) document.getElementById("mission-" + i).style.display = ''; else document.getElementById("mission-" + i).style.display = 'none';
		}
		document.getElementById("tab2").insertAdjacentHTML('beforeend', `<div id='NextMissionUnlock' class='alert alert-warning mt-4'>Next mission unlocks at rank 0</div>`);
		if (getLatestUnlockedMissionId("latest") === "allUnlocked") document.getElementById("NextMissionUnlock").style.display = 'none'; else document.getElementById("NextMissionUnlock").style.display = '';
	}
}

function UpdateMissions(onlyId) {
	if (activeRegion === null) return;
	if (onlyId !== undefined) { const i = onlyId; UpdateMissionsDiv(i); return; }
	for (const i in missions) {
		if (missions[i].regionId === activeRegion) {
			UpdateMissionsDiv(i);
		}
	}
}

function UpdateMissionsDiv(i) {
	const el = document.getElementById("mission-" + i + "-level");
	if (!el) return;

	el.innerHTML = p.missions[i];
	document.getElementById("mission-" + i + "-next").innerHTML = getNextMilestone(p.missions[i]);
	document.getElementById("mission-" + i + "-value").innerHTML = "Cost: R " + fix(GetMissionPrice(i, 1), 1);
	
	const prodVal = (missions[i].value * p.missions[i]) * (p.prestige.bonus + (p.prestige.multipliers[0] * 0.1));
	document.getElementById("mission-" + i + "-production").innerHTML = "R " + fix(prodVal, 1) + "/s";

	document.getElementById("mission-" + i + "-btnB1").disabled = GetMissionPrice(i, 1) > p.cash;
	document.getElementById("mission-" + i + "-btnB10").disabled = GetMissionPrice(i, 10) > p.cash;
	document.getElementById("mission-" + i + "-btnB100").disabled = GetMissionPrice(i, 100) > p.cash;
	document.getElementById("mission-" + i + "-btnS1").disabled = p.missions[i] < 1;
	document.getElementById("mission-" + i + "-btnS10").disabled = p.missions[i] < 10;
	document.getElementById("mission-" + i + "-btnS100").disabled = p.missions[i] < 100;
	if (getLatestUnlockedMissionId("latest") === "allUnlocked") {
		document.getElementById("NextMissionUnlock").style.display = 'none';
	}
	else {
		document.getElementById("NextMissionUnlock").innerHTML = `Next mission unlocks at rank ${missions[getLatestUnlockedMissionId("next")].level}`;
		document.getElementById("NextMissionUnlock").style.display = '';
	}
	if (p.rank >= missions[i].level) document.getElementById("mission-" + i).style.display = '';
}

function UpdateMap() {
	if (activeRegion !== null) return;
	for (const id in regions) {
		const unlocked = isRegionUnlocked(id);
		const progress = getRegionUnlockProgress(id);
		
		const progEl = document.getElementById(`region-progress-${id}`);
		if (progEl) progEl.value = progress;

		const card = document.getElementById(`region-card-${id}`);
		if (card && unlocked && card.classList.contains('opacity-70')) {
			MissionList();
			return;
		}
	}
}

function UpdateBackground() {
	const region = getHighestUnlockedRegion();
	if (region && region.id !== lastBackgroundId) {
		lastBackgroundId = region.id;
		document.body.style.backgroundImage = `url('${region.img}')`;
		document.body.style.backgroundSize = "cover";
		document.body.style.backgroundPosition = "center";
		document.body.style.backgroundAttachment = "fixed";
	}
}

//WEAPONS TABLE
function WeaponList() {
	for (let id = 1; id < 9; id++) {
		document.getElementById('Wtab' + id).innerHTML = "";
	}

	for (const i in weapons) {
		const CONTENT = `
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
        `;
		document.getElementById('Wtab' + weapons[i].type).insertAdjacentHTML('beforeend', CONTENT);
	}
}

function UpdateWeapons() {
	for (const i in weapons) {
		const COST = p.WeaponBought[i] < 1 ? fix(weapons[i].price, 1) : fix(weapons[i].price * 1.25, 1);
		const PURCHASED_TEXT = p.WeaponBought[i] > 0 ? "" : `<i class="fa-solid fa-lock-keyhole"></i> `;
		
		document.getElementById("weapon-" + i + "-name").innerHTML = `${PURCHASED_TEXT}${GenStarLabel(p.Stars[i])} <span class="${getQuality(p.Stars[i])}">${weapons[i].name}</span>`;
		
		const powerVal = fix(weapons[i].power * (GetWeaponMult(i) + ((p.prestige.bonus + p.prestige.multipliers[1]) * 0.1) - 0.1), 1);
		document.getElementById("weapon-" + i + "-price").innerHTML = `R ${COST} <br><small style="color: #db2828;"><i class="fa-thin fa-crosshairs-simple"></i> ${powerVal}</small>`;
		
		const canBuy = p.cash >= (p.WeaponBought[i] < 1 ? weapons[i].price : weapons[i].price * 1.25);
		let purchaseBtnClass = canBuy ? "btn btn-sm btn-warning w-full" : "btn btn-sm btn-error btn-outline w-full btn-disabled";
		if (p.Stars[i] === 10 && p.WeaponBought[i] > 0) purchaseBtnClass = "btn btn-sm btn-warning btn-outline w-full btn-disabled";
		let purchaseText = p.WeaponBought[i] > 0 ? "Roll" : "Buy";
		if (p.Stars[i] === 10 && p.WeaponBought[i] > 0) purchaseText = "Maxed";
		const purchaseBtn = document.getElementById("weapon-" + i + "-purchase"); purchaseBtn.className = purchaseBtnClass; purchaseBtn.innerHTML = purchaseText;
		
		let equipBtnClass = p.WeaponBought[i] > 0 ? "btn btn-sm btn-neutral w-full" : "btn btn-sm btn-neutral w-full btn-disabled";
		let equipText = "Equip";
		if (p.Weapon.Id == i) {
			equipBtnClass = "btn btn-sm btn-success w-full btn-disabled";
			equipText = "Equipped";
		}
		const equipBtn = document.getElementById("weapon-" + i + "-equip"); equipBtn.className = equipBtnClass; equipBtn.innerHTML = equipText;
		
		if (p.WeaponBought[i] < 1) document.getElementById("weapon-" + i).style.opacity = "0.7";
		else document.getElementById("weapon-" + i).style.opacity = "1";
	}
}

//CHARACTER SKILLS TABLE
function VehicleList() {
	let content = "<thead><tr><th class='text-center'>Skill</th><th class='text-center'>Level</th><th class='text-center'>Price</th><th class='text-center'>Bonus</th><th class='text-center'>Action</th></tr></thead><tbody>";
	
	for (const i in vehicules) {
		const vehicle = vehicules[i];
		const PRICE = GetMultPrice(i);
		const canBuy = PRICE > p.points ? ' btn-error btn-outline' : ' btn-warning';
		let BUTTON = "<button class='btn btn-sm w-full" + canBuy + "' onClick='buyV(" + i + ");'>Upgrade</button>";
		let type = "";
		let level = 0;
		const name = "<font class='text type2'>";
		const multiplier = "<font class='jaune'>" + fix((p.prestige.bonus + (p.prestige.multipliers[i] * vehicle.value)), 9) + "</font>";
		const color = vehicle.price > p.points ? ' rouge bold' : ' jaune bold';
		const cost = "<font class='" + color + "'><i class='fa-light fa-coin'></i> " + fix(PRICE, "dynamic") + "</font>";
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
	document.getElementById('Vtab').innerHTML = content;
}

//UI FUNCTIONS

function btnPrestigeD() { document.getElementById("btnPrestige").classList.add("btn-disabled"); }
function btnPrestigeE() { document.getElementById("btnPrestige").classList.remove("btn-disabled"); }
function hideTabs() { for (let id = 1; id < 6; id++) { document.getElementById("tab" + id).style.display = 'none'; document.getElementById("t" + id).classList.remove("btn-active", "text-warning"); } }
function hideMenus() { for (let id = 1; id < 6; id++) { document.getElementById('modal-' + id).close(); } }
function hideWTabs() { for (let id = 0; id < 10; id++) { if(document.getElementById('Wtab' + id)) document.getElementById('Wtab' + id).style.display = 'none'; if(document.getElementById("W" + id)) document.getElementById("W" + id).classList.remove('tab-active'); } }
function hideSTabs() { for (let id = 0; id < 10; id++) { if(document.getElementById('Stab' + id)) document.getElementById('Stab' + id).style.display = 'none'; if(document.getElementById("succcess-btn-" + id)) document.getElementById("succcess-btn-" + id).classList.remove('tab-active'); } }

function ClickEvents() {
	document.getElementById("game-menu").addEventListener("click", function (e) {
		const target = e.target.closest("a");
		if (target) {
			const id = target.dataset.id;
			hideTabs();
			document.getElementById("tab" + id).style.display = '';
			document.getElementById("t" + id).classList.add("btn-active", "text-warning");
			if (id == 2) MissionList();
			UpdateUI();
			UpdateTabs();
		}
	});
	document.getElementById("sidebar").addEventListener("click", function (e) {
		const target = e.target.closest("a");
		if (target) {
			const id = target.dataset.id;
			document.getElementById('modal-' + id).showModal();
			UpdateUI();
		}
	});
	document.getElementById("mobile-bottom-nav").addEventListener("click", function (e) {
		const target = e.target.closest("button");
		if (target) {
			const id = target.dataset.id;
			if (id == 0) {
				const sb = document.getElementById("sidebar");
				sb.classList.toggle("hidden");
				sb.classList.toggle("flex");
			} else {
				hideTabs();
				document.getElementById("tab" + id).style.display = '';
				document.querySelectorAll("#mobile-bottom-nav button").forEach(el => {
					el.classList.remove("active", "text-success", "bg-base-300");
					el.classList.add("text-neutral-content");
				});
				target.classList.remove("text-neutral-content");
				target.classList.add("active", "text-success", "bg-base-300");
				document.getElementById("t" + id).classList.add("btn-active", "text-warning");
				if (id == 2) MissionList();
				UpdateUI();
				UpdateTabs();
			}
		}
	});
	document.getElementById("weap-select").addEventListener("click", function (e) {
		const target = e.target.closest("a");
		if (!target) return;
		const id = target.dataset.id;
		hideWTabs();
		document.getElementById('Wtab' + id).style.display = '';
		document.getElementById("W" + id).classList.add("tab-active");
	});
	document.getElementById("ChangeObjective").addEventListener("click", function () {
		if (p.points >= 0.5) {
			p.points -= 0.5;
			NewObjective();
		}
	});
	document.getElementById("top-menu").addEventListener("click", function (e) {
		if (e.target.closest("#t0")) {
			const sb = document.getElementById("sidebar");
			sb.classList.toggle("hidden");
			sb.classList.toggle("flex");
		}
	});
	document.getElementById("successtype").addEventListener("click", function (e) {
		const target = e.target.closest("button");
		if (!target) return;
		const id = target.dataset.id;
		hideSTabs();
		document.getElementById('Stab' + id).style.display = '';
		document.getElementById("succcess-btn-" + id).classList.add("tab-active");
	});
	document.getElementById("closeMSG").addEventListener("click", function () {
		hideMenus();
	});
	document.getElementById("imagecontainer").addEventListener("click", function () { ClickWeapon(); });
}

//SUCCESS MENU

function SuccessCount() {
	let succeslevel = 0;

	for (const i in success) {
		const succes = success[i];
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
	for (let id = 0; id < 4; id++) { document.getElementById('Stab' + id).innerHTML = ""; }

	for (const i in success) {
		const succes = success[i];
		const unlocked = p.succes[i] > 0 ? "<i class='fa-solid fa-check text-success'></i>" : "<i class='fa-solid fa-times text-error'></i>";

		const succesDIV = 
			"<div class='alert shadow-lg mb-2'>" +
			unlocked +
			"<div class='content'><p class='text type2'>" + succes.name + "</p>" +
			"<p>" + succes.desc + "</p></div></div>";
		
		if (succes.type === 0) { document.getElementById('Stab0').insertAdjacentHTML('beforeend', succesDIV); } // Tutorial
		if (succes.type === 1) { document.getElementById('Stab1').insertAdjacentHTML('beforeend', succesDIV); } // Cash
		if (succes.type === 2) { document.getElementById('Stab2').insertAdjacentHTML('beforeend', succesDIV); } // Missions
		if (succes.type === 4) { document.getElementById('Stab0').insertAdjacentHTML('beforeend', succesDIV); } // Ranks
		if (succes.type === 5) { document.getElementById('Stab3').insertAdjacentHTML('beforeend', succesDIV); } // Prestige
	}
}

//TUTORIAL FUNCTIONS

function showTutorial(id) {
	p.tutorial = id;
	document.getElementById("tutorial-title").innerHTML = "Guide - " + tutorialtexts[id].title;
	document.getElementById("tutorial-text").innerHTML = tutorialtexts[id].text;
	if (p.tutorial == 0) { document.getElementById("tuto-prev").classList.add("btn-disabled"); } else {
		document.getElementById("tuto-prev").classList.remove("btn-disabled");
	}
	if (p.tutorial == 6) { document.getElementById("tuto-next").classList.add("btn-disabled"); } else {
		document.getElementById("tuto-next").classList.remove("btn-disabled");
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
	document.getElementById("message-title").innerHTML = title;
	document.getElementById("message-text").innerHTML = message;
	document.getElementById('modal-1').showModal();
}

function GetMultPrice(id) {
	if (p.prestige.multipliers[id] == null) p.prestige.multipliers[id] = 0;
	let price = 1;
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

	for (const i in missions) {
		const id = parseInt(i);
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