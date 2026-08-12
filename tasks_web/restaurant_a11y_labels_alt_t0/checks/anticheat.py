"""Anti-cheat gate: required components present + the room photographs, icon controls and reservation fields really render."""

from pathlib import Path

from _vitest import run_vitest

REQUIRED = [
    "src/App.tsx",
    "src/components/SiteHeader.tsx",
    "src/components/DiningRoomGallery.tsx",
    "src/components/ReservationForm.tsx",
]

# Marker that must survive in each component — deleting the thing the checks
# grade is not a fix.
MARKERS = {
    "src/components/SiteHeader.tsx": "header-icon-button",
    "src/components/DiningRoomGallery.tsx": "room-shot",
    "src/components/ReservationForm.tsx": "reservation-field",
}


def check(repo_path, task_dir, reference_repo_path=None):
    repo = Path(repo_path)
    for rel in REQUIRED:
        if not (repo / rel).is_file():
            return {"passed": False, "message": f"required file removed: {rel}"}
    for rel, marker in MARKERS.items():
        if marker not in (repo / rel).read_text():
            return {"passed": False, "message": f"{marker} removed from {rel}"}
    passed, total, tail = run_vitest(repo, task_dir, "anticheat.test.tsx")
    ok = total > 0 and passed == total
    return {"passed": ok, "message": "anticheat ok" if ok else f"anticheat {passed}/{total}: {tail}"}
