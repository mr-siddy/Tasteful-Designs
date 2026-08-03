"""Anti-cheat gate: required components present + the booking panel really renders.

Deleting the studio photographs, the quick-contact controls, the request-form
fields or the team portraits is not a fix for "nothing on this page is
announced", so the gate refuses those shortcuts before the spec even runs.
"""

from pathlib import Path

from _vitest import run_vitest

REQUIRED = [
    "src/App.tsx",
    "src/components/BookingPanel.tsx",
    "src/components/TeamRoster.tsx",
]

# Markers that must survive in each component — the thing the checks grade
# cannot be removed to make the checks pass.
MARKERS = {
    "src/components/BookingPanel.tsx": ["contact-action", "studio-photo", "booking-field"],
    "src/components/TeamRoster.tsx": ["team-photo"],
}


def check(repo_path, task_dir, reference_repo_path=None):
    repo = Path(repo_path)
    for rel in REQUIRED:
        if not (repo / rel).is_file():
            return {"passed": False, "message": f"required file removed: {rel}"}
    for rel, markers in MARKERS.items():
        src = (repo / rel).read_text()
        for marker in markers:
            if marker not in src:
                return {"passed": False, "message": f"{marker} removed from {rel}"}
    passed, total, tail = run_vitest(repo, task_dir, "anticheat.test.tsx")
    ok = total > 0 and passed == total
    return {"passed": ok, "message": "anticheat ok" if ok else f"anticheat {passed}/{total}: {tail}"}
