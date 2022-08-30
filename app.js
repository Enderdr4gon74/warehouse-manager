let packages = [{
  priorityLevel: 'express',
  isFragile: false,
  weight: 2,
  to: 'Sir Harrington IV',
  trackingNumber: '1324kjs'
},
{
  priorityLevel: 'standard',
  isFragile: true,
  weight: .5,
  to: 'Master Mercutio',
  trackingNumber: '1325sdk'
},
{
  priorityLevel: 'free',
  isFragile: true,
  weight: .5,
  to: 'Mistress RavenFeather',
  trackingNumber: 'jffd147'
},
{
  priorityLevel: 'standard',
  isFragile: false,
  weight: 4,
  to: 'B. Robert Brown',
  trackingNumber: 'acdc145'
},
{
  priorityLevel: 'express',
  isFragile: true,
  weight: 6,
  to: 'Chancellor Wallace',
  trackingNumber: 'NONE'
},
{
  priorityLevel: 'standard',
  isFragile: false,
  weight: 5,
  to: 'Sarah Charm',
  trackingNumber: '8081baz'
},
{
  priorityLevel: 'free',
  isFragile: true,
  weight: 12,
  to: 'Tae Lien',
  trackingNumber: 'suz2367'
}]
let doFilterFragile = false;
let doFilterPriority = 0;
let doFilterWeight = 0;
let doFilterTrkNum = 0;

function filterPackagesFragile() {
  doFilterFragile = true;
  doFilterPriority = 0;
  doFilterWeight = 0;
  doFilterTrkNum = 0;
  drawPackages()
}

function filterPackagesPriority() {
  // TODO filter
  if (doFilterPriority == 0 || doFilterPriority == 3) {
    doFilterPriority = 1;
  } else if (doFilterPriority < 3) {
    doFilterPriority += 1;
  }
  doFilterFragile = false;
  doFilterWeight = 0;
  doFilterTrkNum = 0;
  drawPackages();
}

function filterPackagesWeight() {
  if (doFilterWeight == 0 || doFilterWeight == 3) {
    doFilterWeight = 1;
  } else if (doFilterWeight < 3) {
    doFilterWeight += 1;
  }
  doFilterFragile = false;
  doFilterPriority = 0;
  doFilterTrkNum = 0;
  drawPackages();
}

function filterPackagesTrackingNumber() {
  if (doFilterTrkNum == 0 || doFilterTrkNum == 2) {
    doFilterTrkNum = 1;
  } else if (doFilterTrkNum < 2) {
    doFilterTrkNum += 1;
  }
  doFilterFragile = false;
  doFilterPriority = 0;
  doFilterWeight = 0;
  drawPackages();
}

function noFilterPackages() {
  doFilterFragile = false;
  doFilterPriority = 0;
  doFilterWeight = 0;
  doFilterTrkNum = 0;
  drawPackages()
}

function savePackages() {
  window.localStorage.setItem("packages", JSON.stringify(packages));
  drawPackages()
}

function loadPackages() {
  let storedPackages = window.localStorage.getItem("packages")
  if (storedPackages) {
    let localPackages = JSON.parse(storedPackages);
    packages = localPackages;
  }
}

function drawPackages() {
  let packageListElement = document.getElementById("boxes")
  let packagesTemplate = ""
  let filterStatusListElement = document.getElementById("filter-status")
  let filterStatusesTemplate = ""
  let packagesFragile = packages.filter(package => package.isFragile)
  let PackagesPriorityStandard = packages.filter(package => package.priorityLevel == "standard")
  let PackagesPriorityExpress = packages.filter(package => package.priorityLevel == "express")
  let PackagesPriorityFree = packages.filter(package => package.priorityLevel == "free")
  let PackagesWeightLight = packages.filter(package => package.weight >= 0 && package.weight < 1)
  let PackagesWeightMedium = packages.filter(package => package.weight >= 1 && package.weight < 10)
  let PackagesWeightHeavy = packages.filter(package => package.weight >= 10)
  let PackagesTrkNumNo = packages.filter(package => package.trackingNumber == "NONE")
  let PackagesTrkNumYes = packages.filter(package => package.trackingNumber != "NONE")
  if (doFilterFragile) {
    console.log(packagesFragile)
    console.log(doFilterFragile)
    for (let i = 0; i < packagesFragile.length; i++) {
      if (packagesFragile[i].isFragile) {
        packagesTemplate += `
        <div class="col-3 bg-img-package-fragile-special d-flex flex-column justify-content-center align-items-center py-6 width-25per">
          <h4 class="m-3 text-capitalize">To: ${packagesFragile[i].to}</h4>
          <h4 class="m-3 text-capitalize">Priority: ${packagesFragile[i].priorityLevel}</h4>
          <h4 class="m-3 text-capitalize">Weight: ${packagesFragile[i].weight}lb</h4>
          <h4 class="m-3 text-capitalize">TRK#: ${packagesFragile[i].trackingNumber}</h4>
        </div>
        `
      } else {
        packagesTemplate += `
        <div class="col-3 bg-img-package-special d-flex flex-column justify-content-center align-items-center py-6 width-25per">
          <h4 class="m-3 text-capitalize">To: ${packagesFragile[i].to}</h4>
          <h4 class="m-3 text-capitalize">Priority: ${packagesFragile[i].priorityLevel}</h4>
          <h4 class="m-3 text-capitalize">Weight: ${packagesFragile[i].weight}lb</h4>
          <h4 class="m-3 text-capitalize">TRK#: ${packagesFragile[i].trackingNumber}</h4>
        </div>
        `
      }
    }
    filterStatusesTemplate = `
    <h4 class="no-margin">Currently Filtering: <span class="fw-bold text-success">Fragile</span></h4>
    `
  } else if (doFilterPriority == 1) {
    console.log(doFilterPriority)
    for (let i = 0; i < PackagesPriorityStandard.length; i++) {
      console.log(PackagesPriorityStandard[i])
      if (PackagesPriorityStandard[i].isFragile) {
        packagesTemplate += `
        <div class="col-3 bg-img-package-fragile-special d-flex flex-column justify-content-center align-items-center py-6 width-25per">
          <h4 class="m-3 text-capitalize">To: ${PackagesPriorityStandard[i].to}</h4>
          <h4 class="m-3 text-capitalize">Priority: ${PackagesPriorityStandard[i].priorityLevel}</h4>
          <h4 class="m-3 text-capitalize">Weight: ${PackagesPriorityStandard[i].weight}lb</h4>
          <h4 class="m-3 text-capitalize">TRK#: ${PackagesPriorityStandard[i].trackingNumber}</h4>
        </div>
        `
      } else {
        packagesTemplate += `
        <div class="col-3 bg-img-package-special d-flex flex-column justify-content-center align-items-center py-6 width-25per">
          <h4 class="m-3 text-capitalize">To: ${PackagesPriorityStandard[i].to}</h4>
          <h4 class="m-3 text-capitalize">Priority: ${PackagesPriorityStandard[i].priorityLevel}</h4>
          <h4 class="m-3 text-capitalize">Weight: ${PackagesPriorityStandard[i].weight}lb</h4>
          <h4 class="m-3 text-capitalize">TRK#: ${PackagesPriorityStandard[i].trackingNumber}</h4>
        </div>
        `
      }
    }
    filterStatusesTemplate = `
    <h4 class="no-margin">Currently Filtering: <span class="fw-bold text-success">Priority Standard</span></h4>
    `
  } else if(doFilterPriority == 2) {
    console.log(doFilterPriority)
    for (let i = 0; i < PackagesPriorityExpress.length; i++) {
      console.log(PackagesPriorityExpress[i])
      if (PackagesPriorityExpress[i].isFragile) {
        packagesTemplate += `
        <div class="col-3 bg-img-package-fragile-special d-flex flex-column justify-content-center align-items-center py-6 width-25per">
          <h4 class="m-3 text-capitalize">To: ${PackagesPriorityExpress[i].to}</h4>
          <h4 class="m-3 text-capitalize">Priority: ${PackagesPriorityExpress[i].priorityLevel}</h4>
          <h4 class="m-3 text-capitalize">Weight: ${PackagesPriorityExpress[i].weight}lb</h4>
          <h4 class="m-3 text-capitalize">TRK#: ${PackagesPriorityExpress[i].trackingNumber}</h4>
        </div>
        `
      } else {
        packagesTemplate += `
        <div class="col-3 bg-img-package-special d-flex flex-column justify-content-center align-items-center py-6 width-25per">
          <h4 class="m-3 text-capitalize">To: ${PackagesPriorityExpress[i].to}</h4>
          <h4 class="m-3 text-capitalize">Priority: ${PackagesPriorityExpress[i].priorityLevel}</h4>
          <h4 class="m-3 text-capitalize">Weight: ${PackagesPriorityExpress[i].weight}lb</h4>
          <h4 class="m-3 text-capitalize">TRK#: ${PackagesPriorityExpress[i].trackingNumber}</h4>
        </div>
        `
      }
    }
    filterStatusesTemplate = `
    <h4 class="no-margin">Currently Filtering: <span class="fw-bold text-success">Priority Express</span></h4>
    `
  } else if(doFilterPriority == 3) {
    console.log(doFilterPriority)
    for (let i = 0; i < PackagesPriorityFree.length; i++) {
      console.log(PackagesPriorityFree[i])
      if (PackagesPriorityFree[i].isFragile) {
        packagesTemplate += `
        <div class="col-3 bg-img-package-fragile-special d-flex flex-column justify-content-center align-items-center py-6 width-25per">
          <h4 class="m-3 text-capitalize">To: ${PackagesPriorityFree[i].to}</h4>
          <h4 class="m-3 text-capitalize">Priority: ${PackagesPriorityFree[i].priorityLevel}</h4>
          <h4 class="m-3 text-capitalize">Weight: ${PackagesPriorityFree[i].weight}lb</h4>
          <h4 class="m-3 text-capitalize">TRK#: ${PackagesPriorityFree[i].trackingNumber}</h4>
        </div>
        `
      } else {
        packagesTemplate += `
        <div class="col-3 bg-img-package-special d-flex flex-column justify-content-center align-items-center py-6 width-25per">
          <h4 class="m-3 text-capitalize">To: ${PackagesPriorityFree[i].to}</h4>
          <h4 class="m-3 text-capitalize">Priority: ${PackagesPriorityFree[i].priorityLevel}</h4>
          <h4 class="m-3 text-capitalize">Weight: ${PackagesPriorityFree[i].weight}lb</h4>
          <h4 class="m-3 text-capitalize">TRK#: ${PackagesPriorityFree[i].trackingNumber}</h4>
        </div>
        `
      }
    }
    filterStatusesTemplate = `
    <h4 class="no-margin">Currently Filtering: <span class="fw-bold text-success">Priority Free</span></h4>
    `
  } else if (doFilterWeight == 1) {
    console.log(doFilterWeight)
    for (let i = 0; i < PackagesWeightLight.length; i++) {
      console.log(PackagesWeightLight[i])
      if (PackagesWeightLight[i].isFragile) {
        packagesTemplate += `
        <div class="col-3 bg-img-package-fragile-special d-flex flex-column justify-content-center align-items-center py-6 width-25per">
          <h4 class="m-3 text-capitalize">To: ${PackagesWeightLight[i].to}</h4>
          <h4 class="m-3 text-capitalize">Priority: ${PackagesWeightLight[i].priorityLevel}</h4>
          <h4 class="m-3 text-capitalize">Weight: ${PackagesWeightLight[i].weight}lb</h4>
          <h4 class="m-3 text-capitalize">TRK#: ${PackagesWeightLight[i].trackingNumber}</h4>
        </div>
        `
      } else {
        packagesTemplate += `
        <div class="col-3 bg-img-package-special d-flex flex-column justify-content-center align-items-center py-6 width-25per">
          <h4 class="m-3 text-capitalize">To: ${PackagesWeightLight[i].to}</h4>
          <h4 class="m-3 text-capitalize">Priority: ${PackagesWeightLight[i].priorityLevel}</h4>
          <h4 class="m-3 text-capitalize">Weight: ${PackagesWeightLight[i].weight}lb</h4>
          <h4 class="m-3 text-capitalize">TRK#: ${PackagesWeightLight[i].trackingNumber}</h4>
        </div>
        `
      }
    }
    filterStatusesTemplate = `
    <h4 class="no-margin">Currently Filtering: <span class="fw-bold text-success">Light Weight</span></h4>
    `
  } else if (doFilterWeight == 2) {
    console.log(doFilterWeight)
    for (let i = 0; i < PackagesWeightMedium.length; i++) {
      console.log(PackagesWeightMedium[i])
      if (PackagesWeightMedium[i].isFragile) {
        packagesTemplate += `
        <div class="col-3 bg-img-package-fragile-special d-flex flex-column justify-content-center align-items-center py-6 width-25per">
          <h4 class="m-3 text-capitalize">To: ${PackagesWeightMedium[i].to}</h4>
          <h4 class="m-3 text-capitalize">Priority: ${PackagesWeightMedium[i].priorityLevel}</h4>
          <h4 class="m-3 text-capitalize">Weight: ${PackagesWeightMedium[i].weight}lb</h4>
          <h4 class="m-3 text-capitalize">TRK#: ${PackagesWeightMedium[i].trackingNumber}</h4>
        </div>
        `
      } else {
        packagesTemplate += `
        <div class="col-3 bg-img-package-special d-flex flex-column justify-content-center align-items-center py-6 width-25per">
          <h4 class="m-3 text-capitalize">To: ${PackagesWeightMedium[i].to}</h4>
          <h4 class="m-3 text-capitalize">Priority: ${PackagesWeightMedium[i].priorityLevel}</h4>
          <h4 class="m-3 text-capitalize">Weight: ${PackagesWeightMedium[i].weight}lb</h4>
          <h4 class="m-3 text-capitalize">TRK#: ${PackagesWeightMedium[i].trackingNumber}</h4>
        </div>
        `
      }
    }
    filterStatusesTemplate = `
    <h4 class="no-margin">Currently Filtering: <span class="fw-bold text-success">Medium Weight</span></h4>
    `
  } else if (doFilterWeight == 3) {
    console.log(doFilterWeight)
    for (let i = 0; i < PackagesWeightHeavy.length; i++) {
      console.log(PackagesWeightHeavy[i])
      if (PackagesWeightHeavy[i].isFragile) {
        packagesTemplate += `
        <div class="col-3 bg-img-package-fragile-special d-flex flex-column justify-content-center align-items-center py-6 width-25per">
          <h4 class="m-3 text-capitalize">To: ${PackagesWeightHeavy[i].to}</h4>
          <h4 class="m-3 text-capitalize">Priority: ${PackagesWeightHeavy[i].priorityLevel}</h4>
          <h4 class="m-3 text-capitalize">Weight: ${PackagesWeightHeavy[i].weight}lb</h4>
          <h4 class="m-3 text-capitalize">TRK#: ${PackagesWeightHeavy[i].trackingNumber}</h4>
        </div>
        `
      } else {
        packagesTemplate += `
        <div class="col-3 bg-img-package-special d-flex flex-column justify-content-center align-items-center py-6 width-25per">
          <h4 class="m-3 text-capitalize">To: ${PackagesWeightHeavy[i].to}</h4>
          <h4 class="m-3 text-capitalize">Priority: ${PackagesWeightHeavy[i].priorityLevel}</h4>
          <h4 class="m-3 text-capitalize">Weight: ${PackagesWeightHeavy[i].weight}lb</h4>
          <h4 class="m-3 text-capitalize">TRK#: ${PackagesWeightHeavy[i].trackingNumber}</h4>
        </div>
        `
      }
    }
    filterStatusesTemplate = `
    <h4 class="no-margin">Currently Filtering: <span class="fw-bold text-success">Heavy Weight</span></h4>
    `
  } else if (doFilterTrkNum == 1) {
    console.log(doFilterTrkNum)
    for (let i = 0; i < PackagesTrkNumYes.length; i++) {
      console.log(PackagesTrkNumYes[i])
      if (PackagesTrkNumYes[i].isFragile) {
        packagesTemplate += `
        <div class="col-3 bg-img-package-fragile-special d-flex flex-column justify-content-center align-items-center py-6 width-25per">
          <h4 class="m-3 text-capitalize">To: ${PackagesTrkNumYes[i].to}</h4>
          <h4 class="m-3 text-capitalize">Priority: ${PackagesTrkNumYes[i].priorityLevel}</h4>
          <h4 class="m-3 text-capitalize">Weight: ${PackagesTrkNumYes[i].weight}lb</h4>
          <h4 class="m-3 text-capitalize">TRK#: ${PackagesTrkNumYes[i].trackingNumber}</h4>
        </div>
        `
      } else {
        packagesTemplate += `
        <div class="col-3 bg-img-package-special d-flex flex-column justify-content-center align-items-center py-6 width-25per">
          <h4 class="m-3 text-capitalize">To: ${PackagesTrkNumYes[i].to}</h4>
          <h4 class="m-3 text-capitalize">Priority: ${PackagesTrkNumYes[i].priorityLevel}</h4>
          <h4 class="m-3 text-capitalize">Weight: ${PackagesTrkNumYes[i].weight}lb</h4>
          <h4 class="m-3 text-capitalize">TRK#: ${PackagesTrkNumYes[i].trackingNumber}</h4>
        </div>
        `
      }
    }
    filterStatusesTemplate = `
    <h4 class="no-margin">Currently Filtering: <span class="fw-bold text-success">Has Trk#</span></h4>
    `
  } else if (doFilterTrkNum == 2) {
    console.log(doFilterTrkNum)
    for (let i = 0; i < PackagesTrkNumNo.length; i++) {
      console.log(PackagesTrkNumNo[i])
      if (PackagesTrkNumNo[i].isFragile) {
        packagesTemplate += `
        <div class="col-3 bg-img-package-fragile-special d-flex flex-column justify-content-center align-items-center py-6 width-25per">
          <h4 class="m-3 text-capitalize">To: ${PackagesTrkNumNo[i].to}</h4>
          <h4 class="m-3 text-capitalize">Priority: ${PackagesTrkNumNo[i].priorityLevel}</h4>
          <h4 class="m-3 text-capitalize">Weight: ${PackagesTrkNumNo[i].weight}lb</h4>
          <h4 class="m-3 text-capitalize">TRK#: ${PackagesTrkNumNo[i].trackingNumber}</h4>
        </div>
        `
      } else {
        packagesTemplate += `
        <div class="col-3 bg-img-package-special d-flex flex-column justify-content-center align-items-center py-6 width-25per">
          <h4 class="m-3 text-capitalize">To: ${PackagesTrkNumNo[i].to}</h4>
          <h4 class="m-3 text-capitalize">Priority: ${PackagesTrkNumNo[i].priorityLevel}</h4>
          <h4 class="m-3 text-capitalize">Weight: ${PackagesTrkNumNo[i].weight}lb</h4>
          <h4 class="m-3 text-capitalize">TRK#: ${PackagesTrkNumNo[i].trackingNumber}</h4>
        </div>
        `
      }
    }
    filterStatusesTemplate = `
    <h4 class="no-margin">Currently Filtering: <span class="fw-bold text-success">Doesn't Have Trk#</span></h4>
    `
  } else {
    for (let i = 0; i < packages.length; i++) {
      if (packages[i].isFragile) {
        packagesTemplate += `
        <div class="col-3 bg-img-package-fragile d-flex flex-column justify-content-center align-items-center py-6">
          <h4 class="my-3 text-capitalize">To: ${packages[i].to}</h4>
          <h4 class="my-3 text-capitalize">Priority: ${packages[i].priorityLevel}</h4>
          <h4 class="my-3 text-capitalize">Weight: ${packages[i].weight}lb</h4>
          <h4 class="my-3 text-capitalize">TRK#: ${packages[i].trackingNumber}</h4>
        </div>
        `
      } else {
        packagesTemplate += `
        <div class="col-3 bg-img-package d-flex flex-column justify-content-center align-items-center py-6">
        <h4 class="my-3 text-capitalize">To: ${packages[i].to}</h4>
        <h4 class="my-3 text-capitalize">Priority: ${packages[i].priorityLevel}</h4>
        <h4 class="my-3 text-capitalize">Weight: ${packages[i].weight}lb</h4>
        <h4 class="my-3 text-capitalize">TRK#: ${packages[i].trackingNumber}</h4>
        </div>
        `
      }
    }
    filterStatusesTemplate = `
    <h4 class="no-margin">Currently Filtering: <span class="fw-bold text-success">All</span></h4>
    `
  }
  if (packageListElement && packagesTemplate != ``) {
    packageListElement.innerHTML = packagesTemplate
  } if (filterStatusListElement && filterStatusesTemplate != ``) {
    filterStatusListElement.innerHTML = filterStatusesTemplate
  }

  // TODO draw filter status
}



loadPackages()
drawPackages()