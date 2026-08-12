"""Anti-cheat gate: required components present + the club page really renders.

The functional check asks whether the page can be announced by a screen reader.
That is trivially satisfiable by deleting the photographs, the icon controls and
the booking fields, so this gate pins the shared kit, the gallery, the header
utilities and the booking form in place before the vitest spec runs.
"""

from pathlib import Path

from _vitest import run_vitest

REQUIRED = [
    "src/App.tsx",
    "src/components/PageKit.tsx",
    "src/components/StudioGallery.tsx",
    "src/components/SiteHeader.tsx",
    "src/components/BookingForm.tsx",
    "src/components/CoachRoster.tsx",
]

MARKERS = {
    "src/components/StudioGallery.tsx": ("gallery-stage", "studio gallery removed"),
    "src/components/SiteHeader.tsx": ("header-utility", "header utility controls removed"),
    "src/components/BookingForm.tsx": ("booking-field", "booking form fields removed"),
    "src/components/CoachRoster.tsx": ("coach-portrait", "coach portraits removed"),
}


def check(repo_path, task_dir, reference_repo_path=None):
    repo = Path(repo_path)
    for rel in REQUIRED:
        if not (repo / rel).is_file():
            return {"passed": False, "message": f"required file removed: {rel}"}
    for rel, (marker, complaint) in MARKERS.items():
        if marker not in (repo / rel).read_text():
            return {"passed": False, "message": complaint}
    passed, total, tail = run_vitest(repo, task_dir, "anticheat.test.tsx")
    ok = total > 0 and passed == total
    return {"passed": ok, "message": "anticheat ok" if ok else f"anticheat {passed}/{total}: {tail}"}
