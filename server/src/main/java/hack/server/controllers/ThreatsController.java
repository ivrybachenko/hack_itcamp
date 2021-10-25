package hack.server.controllers;

import hack.server.models.Threat;
import hack.server.services.ThreatService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController("/threat")
public class ThreatsController {

    private final ThreatService threatService;

    public ThreatsController(ThreatService threatService) {
        this.threatService = threatService;
    }

    @PostMapping("/upload/hard_code")
    public void uploadFromHardcode(String operationalProcessId) {

    }

    @GetMapping("/find/similar")
    public List<Threat> findSimilar(String description) {
        return threatService.findSimilar(description);
    }
}
